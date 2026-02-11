import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToprankclgPage } from './toprankclg.page';

const routes: Routes = [
  {
    path: '',
    component: ToprankclgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToprankclgPageRoutingModule {}
