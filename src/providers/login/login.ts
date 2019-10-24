import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedPage } from '../../pages/feed/feed';
import { AlertController } from 'ionic-angular';


@Injectable()
export class LoginProvider {

  
  constructor(public http: HttpClient , private alertCtrl: AlertController ) { }

  loginUser(newLogin, navCrtl){
    this.http.post('http://piupiuwer.polijunior.com.br/api/login/', 
    JSON.stringify(newLogin),
    { headers: new HttpHeaders().set( "Content-type" , "application/json" )})
      .subscribe(
        () => { 
          navCrtl.push(FeedPage)},
          (err: HttpErrorResponse) => {
            console.log(err);
            
            this.alertCtrl.create({
               title: "Something is wrong!",
               subTitle: "This user doesn't exist",
               buttons: [
                  {text: "ok"}
               ]
            }).present();
  
        }
      );  
  
  }
}
