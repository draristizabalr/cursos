import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () => import('./components/dashboard-page')
  },
  {
    path: 'project',
    title: 'Projects',
    loadComponent: () => import('./components/project-page')
  },
  {
    path: '**',
    redirectTo: '',
  },
];
