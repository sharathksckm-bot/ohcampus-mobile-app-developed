import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClgcomparePageRoutingModule } from './clgcompare-routing.module';

import { ClgcomparePage } from './clgcompare.page';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClgcomparePageRoutingModule,
    MatIconModule
  ],
  declarations: [ClgcomparePage]
})
export class ClgcomparePageModule {}
