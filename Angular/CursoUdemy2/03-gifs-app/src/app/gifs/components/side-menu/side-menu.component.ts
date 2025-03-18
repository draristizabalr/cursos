import { Component, inject } from '@angular/core';
import { GifsSideMenuOptionsComponent, MenuOption } from "./gifs-side-menu-options/gifs-side-menu-options.component";
import { GifsSideMenuHeaderComponent } from "./gifs-side-menu-header/gifs-side-menu-header.component";
import { GifService } from '../../services/gif.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [
    CommonModule,
    GifsSideMenuOptionsComponent,
    GifsSideMenuHeaderComponent
  ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      route: '/dashboard/search'
    }
  ]

  gifService = inject(GifService);

 }
