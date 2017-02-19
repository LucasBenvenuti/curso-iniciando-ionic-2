import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  user : string = 'none';
  constructor(public navCtrl: NavController, public navParams: NavParams, public AlertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  showAlert() : void {
    let alert = this.AlertCtrl.create({
      title : 'Seu nome',
      message : 'Digite seu nome logo abaixo',
      inputs : [
        {
          name: 'nome',
          placeholder: 'Seu nome'
        }
      ],
      buttons : [
        {
          text: 'Cancelar',

        },
        {
          text: 'Continuar',
          handler: data => {
            this.user = data.nome;
          }
        }
      ]
    });

    alert.present();
  }

}
