import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictadmissionPage } from './predictadmission.page';

const routes: Routes = [
  {
    path: '',
    component: PredictadmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredictadmissionPageRoutingModule {}
