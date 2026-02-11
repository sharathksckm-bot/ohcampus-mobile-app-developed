import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlcatlistPage } from './articlcatlist.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlcatlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlcatlistPageRoutingModule {}
