import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  personagens: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personagens = [
      'Tyrion Lanninster',
      'Daenerys Targaryen',
      'Oberyn Martel'
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
