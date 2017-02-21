import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-card-test',
  templateUrl: 'card-test.html'
})
export class CardTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('mensagem'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardTestPage');
  }

  voltar(): void{
    this.navCtrl.pop();
  }
}
