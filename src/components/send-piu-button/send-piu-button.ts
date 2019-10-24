import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'send-piu-button',
  template: '<button ion-button (click)="newPiu()" >Send</button>'
})
export class SendPiuButtonComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  newPiu(){
    
  }

}
