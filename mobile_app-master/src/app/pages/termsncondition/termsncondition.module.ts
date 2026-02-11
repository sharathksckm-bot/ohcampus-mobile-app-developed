import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsnconditionPageRoutingModule } from './termsncondition-routing.module';

import { TermsnconditionPage } from './termsncondition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsnconditionPageRoutingModule
  ],
  declarations: [TermsnconditionPage]
})
export class TermsnconditionPageModule {}
