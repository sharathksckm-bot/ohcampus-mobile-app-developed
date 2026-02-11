import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpreferencesPageRoutingModule } from './editpreferences-routing.module';

import { EditpreferencesPage } from './editpreferences.page';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpreferencesPageRoutingModule,
    MatAutocompleteModule
  ],
  declarations: [EditpreferencesPage]
})
export class EditpreferencesPageModule {}
