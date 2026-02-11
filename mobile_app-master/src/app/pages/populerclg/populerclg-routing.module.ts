import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopulerclgPage } from './populerclg.page';

const routes: Routes = [
  {
    path: '',
    component: PopulerclgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopulerclgPageRoutingModule {}
