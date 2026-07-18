import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/pages/home/home.routes').then((m) => m.HOME_ROUTES),
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
    path: '**',
    redirectTo: '',
  },
];
