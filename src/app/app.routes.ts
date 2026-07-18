import { Routes } from '@angular/router';
import { APP_ROUTES } from './core/constants/routes';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'discover',
    loadChildren: () =>
      import('./features/discover/pages/discover/discover.routes').then(
        (m) => m.DISCOVER_ROUTES
      ),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./features/library/pages/library/library.routes').then(
        (m) => m.LIBRARY_ROUTES
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_ROUTES.HOME,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
