import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';


@Injectable()
export class SignUpProvider {

  constructor(private http: HttpClient,  private alertCtrl: AlertController  ) { 
    
  }
  
  createNewUser(newUser, navCrtl){
    console.log(newUser);
    return this.http.post( 'http://piupiuwer.polijunior.com.br/api/usuarios/registrar/', 
    JSON.stringify(newUser), {
      headers: new HttpHeaders().set("Content-Type", 'application/json') })
      .subscribe(
        () => { 
          navCrtl.push(LoginPage)},
      (err: HttpErrorResponse) => {
          console.log(err);
          
          this.alertCtrl.create( {
             title: "Fill all the blanks correctly",
             buttons: [
                {text: "ok"}
              ]
          }).present();

      }
    );  
  }

}
