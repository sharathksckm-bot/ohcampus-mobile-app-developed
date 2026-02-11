import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursewisearticlesPage } from './coursewisearticles.page';

const routes: Routes = [
  {
    path: '',
    component: CoursewisearticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursewisearticlesPageRoutingModule {}
