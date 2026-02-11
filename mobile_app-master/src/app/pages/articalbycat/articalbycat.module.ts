import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticalbycatPageRoutingModule } from './articalbycat-routing.module';

import { ArticalbycatPage } from './articalbycat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticalbycatPageRoutingModule
  ],
  declarations: [ArticalbycatPage]
})
export class ArticalbycatPageModule {}
