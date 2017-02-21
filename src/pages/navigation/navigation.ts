import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardTestPage } from '../card-test/card-test'

@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html'
})
export class NavigationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

  abrirPagina(): void {
    this.navCtrl.push(CardTestPage, {
      mensagem: 'Mensagem vinda de NavigationPage'
    });
  }

}
