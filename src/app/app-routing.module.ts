import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('./bookmarks/bookmarks.module').then( m => m.BookmarksPageModule)
  },
  {
    path: 'incidents',
    loadChildren: () => import('./incidents/incidents.module').then( m => m.IncidentsPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./profiles/profiles.module').then( m => m.ProfilesPageModule)
  },
  {
    path: 'legislation',
    loadChildren: () => import('./legislation/legislation.module').then( m => m.LegislationPageModule)
  },
  {
    path: 'fto-report',
    loadChildren: () => import('./fto-report/fto-report.module').then( m => m.FtoReportPageModule)
  },
  {
    path: 'evidence',
    loadChildren: () => import('./evidence/evidence.module').then( m => m.EvidencePageModule)
  },
  {
    path: 'charges',
    loadChildren: () => import('./charges/charges.module').then( m => m.ChargesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
