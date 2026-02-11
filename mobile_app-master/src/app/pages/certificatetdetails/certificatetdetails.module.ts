import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificatetdetailsPageRoutingModule } from './certificatetdetails-routing.module';

import { CertificatetdetailsPage } from './certificatetdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificatetdetailsPageRoutingModule
  ],
  declarations: [CertificatetdetailsPage]
})
export class CertificatetdetailsPageModule {}
