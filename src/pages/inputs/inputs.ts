import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private Alert: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }

  login: string;
  senha: string;

  entrar() : void {
    let texto = ('Login: ' + this.login + ' Senha: ' + this.senha);
    let alerta = this.Alert.create({
      title: 'Entrando...',
      message: texto
    });

    alerta.present();
  }

}
