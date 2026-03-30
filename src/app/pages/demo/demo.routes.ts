import { Routes } from '@angular/router';
import { DemoLayout } from './demo-layout';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoLayout,
    children: [
      { path: '', redirectTo: 'no-unsub', pathMatch: 'full' },
      {
        path: 'no-unsub',
        loadComponent: () =>
          import('./pages/demo-no-unsub').then((m) => m.DemoNoUnsub),
      },
      {
        path: 'with-unsub',
        loadComponent: () =>
          import('./pages/demo-with-unsub').then((m) => m.DemoWithUnsub),
      },
      {
        path: 'service-no-unsub',
        loadComponent: () =>
          import('./pages/demo-service-no-unsub').then((m) => m.DemoServiceNoUnsub),
      },
      {
        path: 'service-with-unsub',
        loadComponent: () =>
          import('./pages/demo-service-with-unsub').then((m) => m.DemoServiceWithUnsub),
      },
    ],
  },
];
