import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html'
})
export class ToastPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast(): void {
    let toast = this.toastCtrl.create({
      message: 'Olá Mundo!',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'OK'
    });

    toast.present();
  }

}
