import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CareerdetailsPageRoutingModule } from './careerdetails-routing.module';

import { CareerdetailsPage } from './careerdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CareerdetailsPageRoutingModule
  ],
  declarations: [CareerdetailsPage]
})
export class CareerdetailsPageModule {}
