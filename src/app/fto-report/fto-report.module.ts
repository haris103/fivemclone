import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FtoReportPageRoutingModule } from './fto-report-routing.module';

import { FtoReportPage } from './fto-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FtoReportPageRoutingModule
  ],
  declarations: [FtoReportPage]
})
export class FtoReportPageModule {}
