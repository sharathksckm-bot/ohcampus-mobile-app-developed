import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionpaperPageRoutingModule } from './questionpaper-routing.module';

import { QuestionpaperPage } from './questionpaper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionpaperPageRoutingModule
  ],
  declarations: [QuestionpaperPage]
})
export class QuestionpaperPageModule {}
