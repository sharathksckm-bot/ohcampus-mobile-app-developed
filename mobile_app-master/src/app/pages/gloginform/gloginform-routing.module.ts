import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GloginformPage } from './gloginform.page';

const routes: Routes = [
  {
    path: '',
    component: GloginformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GloginformPageRoutingModule {}
