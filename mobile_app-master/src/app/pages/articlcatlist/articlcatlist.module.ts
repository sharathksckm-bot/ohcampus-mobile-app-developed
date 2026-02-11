import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlcatlistPageRoutingModule } from './articlcatlist-routing.module';

import { ArticlcatlistPage } from './articlcatlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlcatlistPageRoutingModule
  ],
  declarations: [ArticlcatlistPage]
})
export class ArticlcatlistPageModule {}
