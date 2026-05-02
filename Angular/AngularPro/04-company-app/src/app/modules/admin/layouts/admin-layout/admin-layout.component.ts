import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
// import { SideMenuComponent } from "../../../shared/components/side-menu/side-menu.component";
import { DraSideMenu, TitleColor } from 'dra-side-menu'
import { routes } from '../../../../app.routes';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, DraSideMenu],
  templateUrl: './admin-layout.component.html',
})
export default class AdminLayoutComponent {
  // Properties
  routes = routes[0].children!;
  TitleColor = TitleColor;

  // Signals
  isAuthenticated = signal(false);

  onLogin() {
    this.isAuthenticated.set(true);
  }

  onLogout() {
    this.isAuthenticated.set(false);
  }
}
