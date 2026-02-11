import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosecoursePageRoutingModule } from './choosecourse-routing.module';

import { ChoosecoursePage } from './choosecourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosecoursePageRoutingModule
  ],
  declarations: [ChoosecoursePage]
})
export class ChoosecoursePageModule {}
