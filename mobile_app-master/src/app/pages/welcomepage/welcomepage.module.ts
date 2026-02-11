import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomepagePageRoutingModule } from './welcomepage-routing.module';
import { WelcomepagePage } from './welcomepage.page';
//  import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomepagePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [WelcomepagePage]
})
export class WelcomepagePageModule {}
