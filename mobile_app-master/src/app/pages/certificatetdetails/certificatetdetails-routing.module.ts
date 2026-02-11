import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificatetdetailsPage } from './certificatetdetails.page';

const routes: Routes = [
  {
    path: '',
    component: CertificatetdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatetdetailsPageRoutingModule {}
