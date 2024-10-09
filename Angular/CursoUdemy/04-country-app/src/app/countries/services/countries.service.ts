import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import type { Country } from '../interfaces/capital.interfaces'

@Injectable({providedIn: 'root'})
export class CountriesService {

  private API_URL: string = 'https://restcountries.com/v3.1/'
  constructor(
    private http: HttpClient
  ) { }

  searchAlphaCode(code: string): Observable<Country | null> {
    const uri: string = `${this.API_URL}alpha/${ code }`

    return this.http.get<Country[]>(uri)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError( error => of(null))
      )
  }

  searchCapital( term: string ): Observable<Country[]> {
    const uri: string = `${this.API_URL}capital/${ term }`

    return this.http.get<Country[]>(uri)
      .pipe(
        map(countries => countries.sort((a, b) => {
          if (a.name.common > b.name.common) return 1
          else return -1
        })),
        catchError( error => of([]))
      )
  }

  searchCountries( term: string ): Observable<Country[]> {
    const uri: string = `${this.API_URL}name/${ term }`

    return this.http.get<Country[]>(uri)
      .pipe(
        map(countries => countries.sort((a, b) => {
          if (a.name.common > b.name.common) return 1
          else return -1
        })),
        catchError( error => of([]))
      )
  }

  searchRegion( term: string ): Observable<Country[]> {
    const uri: string = `${this.API_URL}region/${ term }`

    return this.http.get<Country[]>(uri)
      .pipe(
        map(countries => countries.sort((a, b) => {
          if (a.name.common > b.name.common) return 1
          else return -1
        })),
        catchError( error => of([]))
      )
  }


}
