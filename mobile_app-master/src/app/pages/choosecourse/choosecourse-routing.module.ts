import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosecoursePage } from './choosecourse.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosecoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosecoursePageRoutingModule {}
