import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecourselistPage } from './specourselist.page';

const routes: Routes = [
  {
    path: '',
    component: SpecourselistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecourselistPageRoutingModule {}
