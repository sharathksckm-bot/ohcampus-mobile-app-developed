import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooselevelPageRoutingModule } from './chooselevel-routing.module';

import { ChooselevelPage } from './chooselevel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooselevelPageRoutingModule
  ],
  declarations: [ChooselevelPage]
})
export class ChooselevelPageModule {}
