import { Component } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'load-log-in-button',
  template: '<button class="buttonLogout" (click)="loadLogIn()" >LogOut</button>',
})
export class LoadLogInButtonComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  loadLogIn(){
    this.navCtrl.push(LoginPage);
  }
}
