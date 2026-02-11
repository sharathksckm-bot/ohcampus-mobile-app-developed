import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyformPage } from './applyform.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyformPageRoutingModule {}
