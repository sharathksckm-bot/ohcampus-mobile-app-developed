import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendcrsdetailsPage } from './trendcrsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: TrendcrsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrendcrsdetailsPageRoutingModule {}
