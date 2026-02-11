import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatelistPage } from './statelist.page';

const routes: Routes = [
  {
    path: '',
    component: StatelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatelistPageRoutingModule {}
