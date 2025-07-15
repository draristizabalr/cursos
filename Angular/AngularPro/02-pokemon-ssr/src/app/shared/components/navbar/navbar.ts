import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from 'src/app/app.routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [RouterLink, RouterLinkActive],
})
export class Navbar {
  notOptionNavigation = ['**', 'pokemon/:id'];
  routes = routes.filter(
    (route) => !this.notOptionNavigation.includes(route.path!),
  );
}
