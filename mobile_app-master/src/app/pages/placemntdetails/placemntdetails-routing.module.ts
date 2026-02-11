import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacemntdetailsPage } from './placemntdetails.page';

const routes: Routes = [
  {
    path: '',
    component: PlacemntdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacemntdetailsPageRoutingModule {}
