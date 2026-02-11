import { NgModule } from '@angular/core';
import { CommonModule , } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecoursebyclgltsPageRoutingModule } from './specoursebyclglts-routing.module';

import { SpecoursebyclgltsPage } from './specoursebyclglts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecoursebyclgltsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SpecoursebyclgltsPage]
})
export class SpecoursebyclgltsPageModule {}
