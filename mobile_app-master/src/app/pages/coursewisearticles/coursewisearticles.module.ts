import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursewisearticlesPageRoutingModule } from './coursewisearticles-routing.module';

import { CoursewisearticlesPage } from './coursewisearticles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursewisearticlesPageRoutingModule
  ],
  declarations: [CoursewisearticlesPage]
})
export class CoursewisearticlesPageModule {}
