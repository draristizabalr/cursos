import { Component, signal } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { DraSideMenu, TitleColor } from 'dra-side-menu';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [DraSideMenu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dra-testbed-app');
  // Properties
  readonly TitleColor = TitleColor;
  readonly routes: Routes = routes

  // Signals
  isAuthenticated = signal(true);

  onLogin() {
    this.isAuthenticated.set(true);
  }

  onLogout() {
    this.isAuthenticated.set(false);
  }
}
