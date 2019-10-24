import { NgModule } from '@angular/core';

import { LoadFeedButtonComponent } from './componets-load-feed-button/load-feed-button';
import { LoadProfileButtonComponent } from './load-profile-button/load-profile-button';
import { LoadSignUpButtonComponent } from './load-sign-up-button/load-sign-up-button';
import { LoadLogInButtonComponent } from './load-log-in-button/load-log-in-button';

import { FeedPage } from '../pages/feed/feed';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { IonicModule } from 'ionic-angular';
import { SendPiuButtonComponent } from './send-piu-button/send-piu-button';


@NgModule({
	declarations: [
		LoadFeedButtonComponent,
		LoadProfileButtonComponent,
		LoadSignUpButtonComponent,
   		LoadLogInButtonComponent,
    	SendPiuButtonComponent,
	],
	exports: [
		LoadFeedButtonComponent,
		LoadProfileButtonComponent,
		LoadSignUpButtonComponent,
    	LoadLogInButtonComponent,
    SendPiuButtonComponent,
	],
	entryComponents: [ 
		FeedPage,
		HomePage,
		SignupPage,
		ProfilePage,
		SignupPage,
	 ],
  	imports: [
		IonicModule
	  ],
})
export class ComponentsModule {
}
