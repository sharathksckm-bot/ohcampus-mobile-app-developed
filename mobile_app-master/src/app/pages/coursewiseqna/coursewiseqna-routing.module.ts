import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursewiseqnaPage } from './coursewiseqna.page';

const routes: Routes = [
  {
    path: '',
    component: CoursewiseqnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursewiseqnaPageRoutingModule {}
