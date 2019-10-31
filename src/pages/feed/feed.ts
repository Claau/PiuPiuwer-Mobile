import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Piu } from '../../modules/piu';
import { LoginProvider } from '../../providers/login/login';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public pius: Piu[];
  public piuContent= '';

  public profilePiuClicked;

  public contador=0;

  public textAreaNewPiuClass: string = 'newPiuTextarea';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    private alertCtrl: AlertController,
    public loginProvider: LoginProvider 
     ) {      
    /*atualiza alista dePius*/
    this.http.get<Piu[]>('http://piupiuwer.polijunior.com.br/api/pius/')
      .subscribe(
        (pius) => { this.pius= pius.reverse() }
      );    

     }


      //muda a formatacao da TextArea do NewPiu quando clickada
      checkFocus(){

        if ( this.textAreaNewPiuClass == 'newPiuTextarea')
          {this.textAreaNewPiuClass = 'newPiuTextareaFocus';}
        else
          { this.textAreaNewPiuClass = 'newPiuTextarea'}
      }


      createNewPiu(){
        if(this.piuContent.length > 140){
          this.textAreaNewPiuClass = 'newPiuTextareaRed';

          this.alertCtrl.create({
            title: "No more than 140 characters!",
            buttons: [
                {text: "ok"}
            ]
          }).present(); 
        }

        if(this.piuContent.length == 0){
          this.textAreaNewPiuClass = 'newPiuTextareaRed';

          this.alertCtrl.create({
            title: "Write something!",
            buttons: [
                {text: "ok"}
            ]
          }).present(); 
        }
        
        let newPiu = {
          conteudo: this.piuContent,
          favoritado: false,
          data: new Date().toISOString(),
          
        }
        console.log("token :" + this.loginProvider.globalToken);

        this.http.post(
          'http://piupiuwer.polijunior.com.br/api/pius/', 
          newPiu,
          { headers: new HttpHeaders().set( 'Authorization'  ,  'JWT ' + this.loginProvider.globalToken ).set( "Content-Type", 'application/json') } 
          ).subscribe(
            (e) => { console.log("new Piu created!") },
            (err) => { console.log(err) }
            );
      }

      loadUserProfile(piu){ 
        this.profilePiuClicked = piu.usuario;
        this.navCtrl.push( ProfilePage, { user: this.profilePiuClicked} );
      }
      
      deletePiu(piu){
        let index = this.pius.indexOf(piu);

        if(index > -1){
          this.pius.splice(index, 1);
        }
      }
  
}
