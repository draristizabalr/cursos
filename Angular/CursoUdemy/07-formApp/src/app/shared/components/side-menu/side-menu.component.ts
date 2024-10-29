import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: `
  .route {
    cursor: pointer;
    border: 1px solid #333;
    margin: 2px 0;
  }

  .menu-container {
    border: 1px solid #666;
    border-radius: 1em;
    padding: 1em;
    background-color: rgba(0,0,255,0.1);
  }
  `
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    { title: 'Básicos', route: './reactive/basic'},
    { title: 'Dinámicos', route: './reactive/dynamic'},
    { title: 'Switches', route: './reactive/switches'},
  ]

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth'},
  ]

}
