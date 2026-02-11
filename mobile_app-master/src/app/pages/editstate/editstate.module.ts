import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditstatePageRoutingModule } from './editstate-routing.module';

import { EditstatePage } from './editstate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditstatePageRoutingModule
  ],
  declarations: [EditstatePage]
})
export class EditstatePageModule {}
