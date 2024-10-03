import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [GamesComponent, NgOptimizedImage],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    username = 'David'
    isLoggedIn = false
    favGame = ''

    getFavorite(gameName: string) {
        this.favGame = gameName
    }

    greet() {
        alert('Hola!!')
    }
}
