import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap } from 'rxjs';
import type { Country } from '../interfaces/country.interfaces'
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private API_URL: string = 'https://restcountries.com/v3.1/'

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(
    private http: HttpClient
  ) {
    this.loadToLocalStorage()
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify( this.cacheStore ))
  }

  private loadToLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return
    const jsonString: string = localStorage.getItem('cacheStore')!
    const json = JSON.parse(jsonString)
    this.cacheStore = json
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.sort((a, b) => {
          if (a.name.common > b.name.common) return 1
          else return -1
        })),
        catchError( error => of([])),
      )
  }

  searchAlphaCode(code: string): Observable<Country | null> {
    const url: string = `${this.API_URL}alpha/${ code }`

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError( error => of(null))
      )
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url: string = `${this.API_URL}capital/${ term }`

    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocalStorage()),
      )
  }

  searchCountries( term: string ): Observable<Country[]> {
    const url: string = `${this.API_URL}name/${ term }`

    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCountries = { term, countries }),
        tap(() => this.saveToLocalStorage()),
      )
  }

  searchRegion( region: Region ): Observable<Country[]> {
    const url: string = `${this.API_URL}region/${ region }`

    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage()),
      )
  }
}
