import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacemntdetailsPageRoutingModule } from './placemntdetails-routing.module';

import { PlacemntdetailsPage } from './placemntdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacemntdetailsPageRoutingModule
  ],
  declarations: [PlacemntdetailsPage]
})
export class PlacemntdetailsPageModule {}
