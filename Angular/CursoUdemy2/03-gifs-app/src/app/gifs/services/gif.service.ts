import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const GIFS_KEY = 'searchHistory';

const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const searchHistory = sessionStorage.getItem(GIFS_KEY);
    if (searchHistory) {
      return JSON.parse(searchHistory);
    }
    return {};
}

@Injectable({
	providedIn: 'root',
})
export class GifService {
	private http = inject(HttpClient);

	trendingGifs = signal<Gif[]>([]);
	trendingGifsLoading = signal(false);
	private trendingPage = signal(0);

	trendingGifGroup = computed<Gif[][]>(() => {
		const groups = [];
		for (let i = 0; i < this.trendingGifs().length; i += 3) {
			groups.push(this.trendingGifs().slice(i, i + 3));	
		}
		console.log(groups);
		return groups;
	});

	searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
	searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

	constructor() {
		this.loadTrendingGifs();
	}

	loadTrendingGifs() {

		if (this.trendingGifsLoading()) return;

		this.trendingGifsLoading.set(true);

		this.http
			.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
				params: {
					api_key: environment.giphyApiKey,
					limit: 20,
					offset: this.trendingPage() * 20,
				},
			})
			.subscribe((response) => {
				const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
				this.trendingGifs.update(currentGifs => [...currentGifs, ...gifs]);
				this.trendingGifsLoading.set(false);
				this.trendingPage.update(page => page + 1);
			});
	}

	searchGifs(query: string): Observable<Gif[]> {
		const url = `${environment.giphyUrl}/gifs/search`;

		return this.http
			.get<GiphyResponse>(url, {
				params: {
					api_key: environment.giphyApiKey,
					q: query,
					limit: 30,
				},
			})
			.pipe(
				map(({ data }) => data),
				map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

				// TODO: Historial
				tap((items) => {
					this.searchHistory.update((history) => ({
						...history,
						[query.toLowerCase()]: items,
					}));
				}),
				tap(() => {
					const searchHistory = JSON.stringify(this.searchHistory());
					sessionStorage.setItem('searchHistory', searchHistory);
				}),
			);
	}

	getHistoryGifs(query: string): Gif[] {
		return this.searchHistory()[query] ?? [];
	}
}
