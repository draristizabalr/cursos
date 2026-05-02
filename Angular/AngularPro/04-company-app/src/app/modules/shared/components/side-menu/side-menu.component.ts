import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  // Inputs
  isAuthenticated = input(false);

  // Outputs
  signOut = output();
  signIn = output();
}
