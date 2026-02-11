import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToprankclgPageRoutingModule } from './toprankclg-routing.module';

import { ToprankclgPage } from './toprankclg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToprankclgPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ToprankclgPage]
})
export class ToprankclgPageModule {}
