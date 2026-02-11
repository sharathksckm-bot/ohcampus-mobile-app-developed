import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitylistPage } from './citylist.page';

const routes: Routes = [
  {
    path: '',
    component: CitylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitylistPageRoutingModule {}
