import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClglistPageRoutingModule } from './clglist-routing.module';

import { ClglistPage } from './clglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClglistPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClglistPage]
})
export class ClglistPageModule {}
