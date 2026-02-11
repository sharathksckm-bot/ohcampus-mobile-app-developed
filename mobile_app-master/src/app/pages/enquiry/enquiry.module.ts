import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EnquiryPageRoutingModule } from './enquiry-routing.module';
import { EnquiryPage } from './enquiry.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquiryPageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule
  ],
  declarations: [EnquiryPage]
})
export class EnquiryPageModule { }
