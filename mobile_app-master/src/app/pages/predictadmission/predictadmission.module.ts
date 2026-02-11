import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredictadmissionPageRoutingModule } from './predictadmission-routing.module';

import { PredictadmissionPage } from './predictadmission.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

  // import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredictadmissionPageRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
      // NgxMatSelectSearchModule,

  ],
  declarations: [PredictadmissionPage]
})
export class PredictadmissionPageModule { }
