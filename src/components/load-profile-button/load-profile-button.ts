import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from "../../pages/profile/profile";


@Component({
  selector: 'load-profile-button',
  template: '<button ion-button (click)="loadProfile()" >Profile</button>',
})
export class LoadProfileButtonComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  loadProfile(){
    this.navCtrl.push( ProfilePage );
  }

}
