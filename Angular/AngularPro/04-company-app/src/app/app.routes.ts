import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'Dashboard',
        loadComponent: () => import('./modules/admin/pages/summary/summary.component')
      },
      {
        path: 'projects',
        title: 'Projects',
        loadComponent: () => import('./modules/admin/pages/projects/projects.component')
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
