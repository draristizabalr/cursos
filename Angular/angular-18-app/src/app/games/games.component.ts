import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-games',
    standalone: true,
    imports: [],
    template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
        @for (game of games; track game.id) {
            <li (click)="fav(game.name)" [style]="{color}">{{ game.name }}</li>
        }
    </ul>
  `,
    styles: ``
})
export class GamesComponent {
    @Input() username: string = ''
    @Output() addFavoriteEvent = new EventEmitter<string>()

    fav(gameName: string) {
        this.addFavoriteEvent.emit(gameName)
    }

    color = 'salmon'

    games = [
        {
            id: 1,
            name: 'Uncharted 4'
        },
        {
            id: 2,
            name: 'Horizon Zero Dawn'
        },
        {
            id: 3,
            name: 'Bloodborne'
        },
        {
            id: 4,
            name: 'Dota 2'
        },
    ]
}
