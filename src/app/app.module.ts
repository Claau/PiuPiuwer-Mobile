import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';

import { ComponentsModule } from '../components/components.module';
import { LoginProvider } from '../providers/login/login';
import { SignUpProvider } from '../providers/sign-up/sign-up';
import { RestProvider } from '../providers/rest/rest';
import { LoginPage } from '../pages/login/login';

import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    SignupPage,
    ProfilePage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'PiuPiuwer',
      storeName: 'pius',
      driverOrder: ['indexeddb']
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FeedPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    SignUpProvider,
    RestProvider,
    Storage
  ],

})
export class AppModule { }
