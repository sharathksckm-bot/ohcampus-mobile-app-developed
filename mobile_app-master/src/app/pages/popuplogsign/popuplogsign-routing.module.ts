import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopuplogsignPage } from './popuplogsign.page';

const routes: Routes = [
  {
    path: '',
    component: PopuplogsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopuplogsignPageRoutingModule {}
