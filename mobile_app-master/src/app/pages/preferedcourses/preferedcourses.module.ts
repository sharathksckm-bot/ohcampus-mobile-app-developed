import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferedcoursesPageRoutingModule } from './preferedcourses-routing.module';

import { PreferedcoursesPage } from './preferedcourses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferedcoursesPageRoutingModule
  ],
  declarations: [PreferedcoursesPage]
})
export class PreferedcoursesPageModule {}
