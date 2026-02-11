import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditstatePage } from './editstate.page';

const routes: Routes = [
  {
    path: '',
    component: EditstatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditstatePageRoutingModule {}
