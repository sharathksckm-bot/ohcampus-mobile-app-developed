import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrendcrsdetailsPageRoutingModule } from './trendcrsdetails-routing.module';

import { TrendcrsdetailsPage } from './trendcrsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrendcrsdetailsPageRoutingModule
  ],
  declarations: [TrendcrsdetailsPage]
})
export class TrendcrsdetailsPageModule {}
