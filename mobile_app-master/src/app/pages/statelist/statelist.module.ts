import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatelistPageRoutingModule } from './statelist-routing.module';

import { StatelistPage } from './statelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatelistPageRoutingModule
  ],
  declarations: [StatelistPage]
})
export class StatelistPageModule {}
