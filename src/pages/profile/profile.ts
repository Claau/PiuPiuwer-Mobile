import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController ) {
      
    let loading = this.loadingCtrl.create({
      content: '<p class="loading" >Loading</p>'
    });

    loading.present();
    loading.dismiss();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
