import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursewiseexamPage } from './coursewiseexam.page';

const routes: Routes = [
  {
    path: '',
    component: CoursewiseexamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursewiseexamPageRoutingModule {}
