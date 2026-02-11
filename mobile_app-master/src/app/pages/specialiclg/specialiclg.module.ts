import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialiclgPageRoutingModule } from './specialiclg-routing.module';

import { SpecialiclgPage } from './specialiclg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialiclgPageRoutingModule
  ],
  declarations: [SpecialiclgPage]
})
export class SpecialiclgPageModule {}
