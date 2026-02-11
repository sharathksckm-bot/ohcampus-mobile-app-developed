import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecoursebyclgltsPage } from './specoursebyclglts.page';

const routes: Routes = [
  {
    path: '',
    component: SpecoursebyclgltsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecoursebyclgltsPageRoutingModule {}
