import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsnconditionPage } from './termsncondition.page';

const routes: Routes = [
  {
    path: '',
    component: TermsnconditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsnconditionPageRoutingModule {}
