import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { Piu } from '../../modules/piu';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public pius: Piu[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: HttpClient ) {

    /*atualiza alista dePius*/
    this._http.get<Piu[]>('http://www.json-generator.com/api/json/get/ceycmRLqWa?indent=2')
      .subscribe(
        (pius) => { this.pius= pius }
      );    
    }
  /*
  createNewPiu(username ,string, mensagem , imagem, nome ){
    
    //validacao do piu
    if( !this.mensagem ){
      this.alertCtrl.create({
        title: "Yooh! you didnt say a word!",
        subTitle: 'Cant submit a empty Piu',
        buttons: [{ text: 'ok' }],
      }).present();

      return;
    }

    if( !this.mensagem.lenght<140 ){
      this.alertCtrl.create({
        title: "Yooh! you need to resume your speech!",
        subTitle: 'Cant submit a empty Piu',
        buttons: [{ text: 'ok' }],
      }).present();

      return;
    }

    //criando o novo piu
    let newPiu: Piu = {
      username: this.username,  //this.username
      mensagem: this.mensagem,
      imagem: this.imagem,
      nome: this.nome, 
    }

     //usados no post
     this.alerta= this.alertCtrl.create({
      title: 'Aviso',
      buttons: [ { text:'ok' } ]
    });   
  }

  //newPiuPost - newpiu provider
  this.loadNewPiu.createNewPiu(newPiu)
  .subscribe(
  () =>  { //this.alerta.setSubTitlel('New Piu Posted')
 },
  () => { 
    this.alerta.setSubTitle('Error: couldn post the new piu')
    this.alerta.present() }
  );
  */
}
