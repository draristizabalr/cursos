import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('./pages/base-page/base-page.component')
  },
  {
    path: 'number',
    title: 'Pipes Numéricos',
    loadComponent: () => import('./pages/number-page/number-page.component')
  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () => import('./pages/custom-page/custom-page.component')
  },
  {
    path: 'uncommon',
    title: 'Pipes No Comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
  },
  {
    path: '**',
    redirectTo: 'basic'
  },
];
