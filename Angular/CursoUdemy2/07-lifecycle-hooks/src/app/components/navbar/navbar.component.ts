import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: `
    nav {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      width: 100%;
    }

    a {
      border-radius: 0.5em;
      border: 1px solid #333;
      padding: 0.25em 0.5em;
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }

    .active {
      background-color: salmon;
      color: white;
    }
  `
})
export class NavbarComponent {

}
