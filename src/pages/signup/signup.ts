import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { User } from '../../modules/user';
import { SignUpProvider } from '../../providers/sign-up/sign-up';
import { FeedPage } from '../feed/feed';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public username: string;
  public firstName: string;
  public secondName: string;
  public email: string;
  public file: string;
  public password1: string;
  public password2: string;

  public checkLoguin: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private newUserServide: SignUpProvider, 
    private loadingCtrl: LoadingController,
   )  {
  }

  createNewUser(){
      
      let loading = this.loadingCtrl.create({
        content: '<p class="loading" >Loading</p>'
      });

      loading.present();

        let newUser: User = {
            username: this.username,
            first_name: this.firstName,
            last_name: this.secondName,
            email: this.email,
           // prophilePhoto: this.file,
            password: this.password1,
          };

    this.newUserServide.createNewUser(newUser, this.navCtrl);
    loading.dismiss();
          
  }

}
