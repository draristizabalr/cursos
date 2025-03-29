import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Environments } from '../../environments/environments';
import { RESTCountry } from '../interfaces/rest-contries.inteface';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mappers';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<string, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    const lowerCaseQuery = query.toLowerCase();

    if ( this.queryCacheCapital.has(lowerCaseQuery) ) {
      return of(this.queryCacheCapital.get(lowerCaseQuery) ?? []);
    }

    console.log(`Llegando al servidor por ${query}`);

    const endpoint_url = `${Environments.url}/capital/${lowerCaseQuery}`;

    return this.http.get<RESTCountry[]>(endpoint_url).pipe(
      map((response) =>
        CountryMapper.mapRestCountryArrayToCountryArray(response)
      ),
      tap((countries) => this.queryCacheCapital.set(lowerCaseQuery, countries)),
      catchError(() => {
        return throwError(
          () =>
            new Error(
              'No se encontró un pais con una capital que tenga los caracteres: ' +
                query
            )
        );
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const lowerCaseQuery = query.toLowerCase();

    if (this.queryCacheCountry.has(lowerCaseQuery)) {
      return of(this.queryCacheCountry.get(lowerCaseQuery) ?? []);
    }

    console.log(`Consumiendo api countries con el query: ${query}`);

    const endpoint_url = `${Environments.url}/name/${lowerCaseQuery}`;

    return this.http.get<RESTCountry[]>(endpoint_url).pipe(
      map((response) =>
        CountryMapper.mapRestCountryArrayToCountryArray(response)
      ),
      tap((countries) => this.queryCacheCountry.set(lowerCaseQuery, countries)),
      delay(1000),
      catchError(() => {
        return throwError(
          () =>
            new Error(
              'No se encontró algún pais con un nombre que tenga los caracteres: ' +
                query
            )
        );
      })
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | undefined> {
    const endpoint_url = `${Environments.url}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(endpoint_url).pipe(
      map((response) =>
        CountryMapper.mapRestCountryArrayToCountryArray(response)
      ),
      map((countries) => countries.at(0)),
      catchError(() => {
        return throwError(
          () =>
            new Error(
              'No se encontró algún pais con el código: ' +
                code
            )
        );
      })
    );
  }

  searchCountriesByRegion(region: Region): Observable<Country[]> {
    const regionLowerCase = region.toLowerCase();

    const endpoint_url = `${Environments.url}/region/${regionLowerCase}`;

    if (this.queryCacheRegion.has(regionLowerCase)) {
      return of(this.queryCacheRegion.get(regionLowerCase) ?? []);
    }

    return this.http.get<RESTCountry[]>(endpoint_url)
      .pipe(
        map((response) => CountryMapper.mapRestCountryArrayToCountryArray(response)),
        tap((countries) => this.queryCacheRegion.set(region, countries)),
        catchError(() => {
          return throwError(
            () =>
              new Error('No se encontró algún país en la región: ' + region)
          );
        })
      );
  }
}
