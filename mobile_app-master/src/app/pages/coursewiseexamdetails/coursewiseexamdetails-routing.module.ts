import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursewiseexamdetailsPage } from './coursewiseexamdetails.page';

const routes: Routes = [
  {
    path: '',
    component: CoursewiseexamdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursewiseexamdetailsPageRoutingModule {}
