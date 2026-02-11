import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpreferencesPage } from './editpreferences.page';

const routes: Routes = [
  {
    path: '',
    component: EditpreferencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpreferencesPageRoutingModule {}
