import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public username;
  public password;
  public checkUserExist: boolean = false;
  public checkPasswordIsCorrect: boolean = false;
  public loginCheck: boolean =  false;

  constructor(
    public navCtrl: NavController,
    public users: LoginProvider,
    public usersProvider: LoginProvider,
    private loadingCtrl: LoadingController ) {
      
      let loading = this.loadingCtrl.create({
        content: '<p class="loading" >Loading</p>'
      });

      loading.present();
      loading.dismiss();
     }

   loginUser(){
      let newLogin = {
        username: this.username, password: this.password
      }
      
      this.usersProvider.loginUser(newLogin, this.navCtrl);
    }
    
}
