import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitylistPageRoutingModule } from './citylist-routing.module';

import { CitylistPage } from './citylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitylistPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CitylistPage]
})
export class CitylistPageModule {}
