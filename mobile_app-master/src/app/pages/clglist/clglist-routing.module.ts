import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClglistPage } from './clglist.page';

const routes: Routes = [
  {
    path: '',
    component: ClglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClglistPageRoutingModule {}
