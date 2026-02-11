import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursewiseexamPageRoutingModule } from './coursewiseexam-routing.module';

import { CoursewiseexamPage } from './coursewiseexam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursewiseexamPageRoutingModule
  ],
  declarations: [CoursewiseexamPage]
})
export class CoursewiseexamPageModule {}
