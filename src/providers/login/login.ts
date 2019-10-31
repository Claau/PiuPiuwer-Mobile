import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { User } from '../../modules/user';


@Injectable()
export class LoginProvider {
  public globalToken;
  public userLogado;

  public user;  //guarda as infos do usuario logado

  public username: string;
  public userID: string;
  public email: string;
  public decodedJSON: string;
  
  constructor(public http: HttpClient , private alertCtrl: AlertController ) { 
  }

  tokenDecode() {
    const token = this.globalToken;
   
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      this.decodedJSON = JSON.parse(payload);
      this.userID = this.decodedJSON['user_id'];
      this.username = this.decodedJSON['username'];
      this.email = this.decodedJSON['email']

      console.log(this.username);
      console.log(this.userID);
      console.log(this.email);
      console.log(this.decodedJSON);

      return true;
    } else {
      return false;
    }
  }


  loginUser(newLogin){
    
     this.http.post(
        'http://piupiuwer.polijunior.com.br/api/login/', 
        JSON.stringify(newLogin),
        { headers: new HttpHeaders().set( "Content-type" , "application/json") } 
        ).subscribe(
          (e) => { 
            this.globalToken = e["token"];
            this.tokenDecode();
           

            //modo porco de conseguir o usuario so quando tokenDecode() tenha acabado
            this.http.get('http://piupiuwer.polijunior.com.br/api/usuarios/' + this.userID )
              .subscribe(
                (e) => { this.user = e 
                },
                (err) => {console.log(err)} );
          },
          
          (err: HttpErrorResponse) => {
             console.log(err);
            
              this.alertCtrl.create({
                title: "Something is wrong!",
                subTitle: "This user or password doesn't exist",
                buttons: [
                    {text: "ok"}
                ]
        }).present(); }
      ); 
      }
  
}
