import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { SimplePokemon, PokeAPIResponse, Result, Pokemon } from '../interfaces';
import { Meta, Title } from '@angular/platform-browser';

const urlBase = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private http = inject(HttpClient);
  private title = inject(Title);
  private meta = inject(Meta);

  loadPage(page: number): Observable<SimplePokemon[]> {
    if (page !== 0) --page;

    page = Math.max(0, page);

    const params = new HttpParams().set('offset', page * 20).set('limit', 20);

    return this.http.get<PokeAPIResponse>(urlBase, { params }).pipe(
      map((response) => {
        const simplePokemons: SimplePokemon[] = response.results.map(
          (pokemon) => ({
            id: pokemon.url.split('/').at(-2) ?? '',
            name: pokemon.name,
          }),
        );
        return simplePokemons;
      }),
      tap(() => this.title.setTitle(`Pokemons SSR - Page ${page + 1}`)),
    );
  }

  loadPokemon(id: string) {
    if (!id) return of(null);

    const url = `${urlBase}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        throw error.message;
      }),
      tap(({ name, id }) => {
        const pageTitle = `#${id} - ${name}`;

        this.title.setTitle(pageTitle);

        this.meta.updateTag({
          name: 'description',
          content: `Pagina del pokemon ${name}`,
        });
        this.meta.updateTag({
          name: 'og:title',
          content: pageTitle,
        });
        this.meta.updateTag({
          name: 'og:description',
          content: `Pagina del pokemon ${name}`,
        });
        this.meta.updateTag({
          name: 'og:image',
          content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        });
      }),
    );
  }
}
