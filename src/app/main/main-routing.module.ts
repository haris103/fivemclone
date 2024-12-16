import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'bookmarks',
        loadChildren: () => import('../bookmarks/bookmarks.module').then( m => m.BookmarksPageModule)
      },
      {
        path: 'incidents',
        loadChildren: () => import('../incidents/incidents.module').then( m => m.IncidentsPageModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('../reports/reports.module').then( m => m.ReportsPageModule)
      },
      {
        path: 'profiles',
        loadChildren: () => import('../profiles/profiles.module').then( m => m.ProfilesPageModule)
      },
      {
        path: 'legislation',
        loadChildren: () => import('../legislation/legislation.module').then( m => m.LegislationPageModule)
      },
      {
        path: 'fto-report',
        loadChildren: () => import('../fto-report/fto-report.module').then( m => m.FtoReportPageModule)
      },
  {
    path: 'evidence',
    loadChildren: () => import('../evidence/evidence.module').then( m => m.EvidencePageModule)
  },
  {
    path: 'charges',
    loadChildren: () => import('../charges/charges.module').then( m => m.ChargesPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
  },
    ]
  },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
