// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { Device } from '@ionic-native/device/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NgModule } from '@angular/core';







@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({}), AppRoutingModule,
    BrowserAnimationsModule,CommonModule, HttpClientModule,
      // AngularFireAuthModule,
      MatAutocompleteModule,
      OverlayModule,
    //  AngularFireModule.initializeApp(environment.firebaseConfig),

],
  providers: [
    Device,
    // StatusBar,
    // SplashScreen,
    InAppBrowser,
      GooglePlus,
      FCM,
      // FirebaseX,
      SocialSharing,
      MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

      // { provide: 'ENVIRONMENT', useValue: environment },

{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

