import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifList: Gif[] = []

  private _tagsHistory: string[] = []
  private GIPHY_API_KEY: string = 'x1lGIRJ4olia1f2HFGUANo1k9SktM64f'
  private GIPHY_URL: string = 'https://api.giphy.com/v1/gifs'

  constructor(
    private http: HttpClient
  ) {
    this.loadLocalStorage()
    console.log('Gifs Service Ready')
  }

  get tagHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory (newTag: string): void {

    newTag = newTag.toLowerCase()

    if (this._tagsHistory.includes(newTag)){
      this._tagsHistory = this._tagsHistory.filter(tag => tag !== newTag)
    }
    this._tagsHistory.unshift(newTag)

    this._tagsHistory = this._tagsHistory.slice(0,10)
    this.saveLocalStorage()
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void {
    if (!localStorage.getItem('history')) return

    this._tagsHistory = JSON.parse( localStorage.getItem('history')! )

    if (this._tagsHistory.length) this.searchTag(this._tagsHistory[0])
  }

  searchTag(tag: string):void {
    if (!tag) return
    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('q', tag)
      .set('limit', '10')

    this.http.get<SearchResponse>(`${this.GIPHY_URL}/search`,{ params })
      .subscribe(resp => {
        this.gifList = resp.data
        console.log({ gifs: this.gifList })
      })
  }
}
