import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooselevelPage } from './chooselevel.page';

const routes: Routes = [
  {
    path: '',
    component: ChooselevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooselevelPageRoutingModule {}
