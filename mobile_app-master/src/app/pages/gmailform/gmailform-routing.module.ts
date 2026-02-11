import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GmailformPage } from './gmailform.page';

const routes: Routes = [
  {
    path: '',
    component: GmailformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GmailformPageRoutingModule {}
