import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileInnerPage } from './profile-inner.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileInnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileInnerPageRoutingModule {}
