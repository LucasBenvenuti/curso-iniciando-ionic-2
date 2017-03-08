import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html'
})
export class ModalLoginPage {

  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    console.log('Dados recebidos: ', navParams.get('action'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLoginPage');
  }

  logar(): void{
    this.view.dismiss(this.user);
  }
  close(): void{
    this.view.dismiss();
  }
}
