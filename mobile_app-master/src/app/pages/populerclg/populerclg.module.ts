import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopulerclgPageRoutingModule } from './populerclg-routing.module';

import { PopulerclgPage } from './populerclg.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopulerclgPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PopulerclgPage],
})
export class PopulerclgPageModule {}
