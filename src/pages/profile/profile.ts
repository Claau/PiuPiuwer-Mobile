import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { User } from '../../modules/user';
import { LoginProvider } from '../../providers/login/login';
import { HttpClient } from '@angular/common/http';
import { Piu } from '../../modules/piu';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  public user;
  public pius: Piu[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public usersProvider: LoginProvider,
    public http: HttpClient,
   ) {
     
      //load icon
      let loading = this.loadingCtrl.create(
        { content: '<p class="loading" >Loading</p>'}
      );

      loading.present();
      loading.dismiss();
     
     this.user = this.navParams.get('user');
   
      this.http.get<Piu[]>("http://piupiuwer.polijunior.com.br/api/pius?usuario=" + 4/*this.usersProvider.userID*/)
      .subscribe(
        (pius) => { this.pius = pius.reverse();
         },
        (err) => { console.log(err) }
      )
    }
 
   
    
}
