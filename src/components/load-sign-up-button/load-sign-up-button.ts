import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';



/**
 * Generated class for the LoadSignUpButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'load-sign-up-button',
  template: '<h3 (click)=loadSignUp() >Singup</h3>',
})
export class LoadSignUpButtonComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  loadSignUp(){
    this.navCtrl.push( SignupPage );
  }

}
