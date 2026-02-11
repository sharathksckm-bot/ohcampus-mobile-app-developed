import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursewiseqnaPageRoutingModule } from './coursewiseqna-routing.module';

import { CoursewiseqnaPage } from './coursewiseqna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursewiseqnaPageRoutingModule
  ],
  declarations: [CoursewiseqnaPage]
})
export class CoursewiseqnaPageModule {}
