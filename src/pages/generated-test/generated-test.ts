import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from './../../providers/connection-service';

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html'
})
export class GeneratedTestPage {

  nomeTeste: string;

  constructor( public navCtrl: NavController, public navParams: NavParams, private connectionService: ConnectionService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratedTestPage');
  }

buscarCep() : void {
  this.connectionService.getCep('88354020').then((resp) => {
    let json = resp.json();
    console.log(json.logradouro);
    this.nomeTeste = json.logradouro;
    console.log(this.nomeTeste);
  }).catch((erro) => {
    console.log(erro);
    })
}

}
