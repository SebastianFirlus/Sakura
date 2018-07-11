import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GutscheinPage } from '../pages/Gutschein/Gutschein';
import { AktionPage } from '../pages/Aktion/Aktion';
import { KontaktPage } from '../pages/Kontakt/Kontakt';
import { SpeisekartePage } from '../pages/Speisekarte/Speisekarte';
import { HomePage } from '../pages/Home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    GutscheinPage,
    AktionPage,
    KontaktPage,
    SpeisekartePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GutscheinPage,
    AktionPage,
    KontaktPage,
    SpeisekartePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
