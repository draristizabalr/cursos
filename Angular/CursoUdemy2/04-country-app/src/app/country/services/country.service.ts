import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Environments } from '../../environments/environments';
import { RESTCountry } from '../interfaces/rest-contries.inteface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mappers';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    const lowerCaseQuery = query.toLowerCase();

    const endpoint_url = `${Environments.url}/capital/${lowerCaseQuery}`;

    return this.http.get<RESTCountry[]>(endpoint_url).pipe(
      map((response) =>
        CountryMapper.mapRestCountryArrayToCountryArray(response)
      ),
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

    const endpoint_url = `${Environments.url}/name/${lowerCaseQuery}`;

    return this.http.get<RESTCountry[]>(endpoint_url).pipe(
      map((response) =>
        CountryMapper.mapRestCountryArrayToCountryArray(response)
      ),
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
}
