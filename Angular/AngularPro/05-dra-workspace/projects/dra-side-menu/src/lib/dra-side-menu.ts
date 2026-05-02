import { Component, computed, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-dra-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dra-side-menu.html',
  styles: ``,
})
export class DraSideMenu {
  // Inputs
  isAuthenticated = input(false);
  titleColor = input<TitleColor>(TitleColor.purple);
  companyName = input('');
  companySubName = input('');
  routes = input.required<Routes>();

  // Outputs
  signOut = output();
  signIn = output();

  // Computed
  filteredRoutes = computed(() =>
    this.routes().filter((route) => route.path !== '**')
  );
}
