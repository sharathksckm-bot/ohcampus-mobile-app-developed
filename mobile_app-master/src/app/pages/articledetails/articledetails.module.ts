import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticledetailsPageRoutingModule } from './articledetails-routing.module';

import { ArticledetailsPage } from './articledetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticledetailsPageRoutingModule
  ],
  declarations: [ArticledetailsPage]
})
export class ArticledetailsPageModule {}
