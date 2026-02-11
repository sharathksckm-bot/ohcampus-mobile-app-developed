import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClgcomparePage } from './clgcompare.page';

const routes: Routes = [
  {
    path: '',
    component: ClgcomparePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClgcomparePageRoutingModule {}
