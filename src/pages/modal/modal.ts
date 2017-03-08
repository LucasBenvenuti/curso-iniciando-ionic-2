import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  openModal(): void {
    let modal = this.modalCtrl.create(ModalLoginPage, {
      action: {
        test: 'Olá',
        value: true
      }
    });

    modal.onDidDismiss((param) => {
      console.log('Dados do usuário: ', param);
    });

    modal.present();

  }
}
