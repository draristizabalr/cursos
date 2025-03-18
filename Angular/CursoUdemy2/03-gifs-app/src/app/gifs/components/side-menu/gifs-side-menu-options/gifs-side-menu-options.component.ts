import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface MenuOption {
  icon: string;
  label: string;
  route: string | string[];
  subLabel: string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent { 
  route = input.required<string | string[]>();
  icon = input.required<string>();
  label = input.required<string>();
  subLabel = input<string>();
}
