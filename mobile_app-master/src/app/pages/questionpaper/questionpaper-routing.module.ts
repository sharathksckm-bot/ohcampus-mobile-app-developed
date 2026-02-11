import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionpaperPage } from './questionpaper.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionpaperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionpaperPageRoutingModule {}
