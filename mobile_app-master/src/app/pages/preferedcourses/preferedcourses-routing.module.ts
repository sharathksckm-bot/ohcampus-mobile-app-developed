import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferedcoursesPage } from './preferedcourses.page';

const routes: Routes = [
  {
    path: '',
    component: PreferedcoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferedcoursesPageRoutingModule {}
