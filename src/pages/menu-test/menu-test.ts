import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { HomePage } from '../home/home'
import { GeneratedTestPage } from '../generated-test/generated-test'

@Component({
  selector: 'page-menu-test',
  templateUrl: 'menu-test.html'
})
export class MenuTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTestPage');
  }

  pushPage2() : void {
    this.navCtrl.push(GeneratedTestPage);
  }

}
