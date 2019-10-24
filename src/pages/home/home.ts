import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController,  public users: LoginProvider, public usersProvider: LoginProvider ) { 
    this.navCtrl.push(LoginPage);
  }
}

  
  
