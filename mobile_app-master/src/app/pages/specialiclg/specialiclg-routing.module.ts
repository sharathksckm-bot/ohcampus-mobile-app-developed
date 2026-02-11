import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialiclgPage } from './specialiclg.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialiclgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialiclgPageRoutingModule {}
