import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesPage } from './profiles.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilesPage
  },  {
    path: 'profile-inner',
    loadChildren: () => import('./profile-inner/profile-inner.module').then( m => m.ProfileInnerPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesPageRoutingModule {}
