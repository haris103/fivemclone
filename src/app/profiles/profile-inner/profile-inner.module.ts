import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileInnerPageRoutingModule } from './profile-inner-routing.module';

import { ProfileInnerPage } from './profile-inner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileInnerPageRoutingModule
  ],
  declarations: [ProfileInnerPage]
})
export class ProfileInnerPageModule {}
