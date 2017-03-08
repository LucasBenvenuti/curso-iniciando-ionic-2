import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContatosTabPage } from '../contatos-tab/contatos-tab';
import { HomeTabPage } from '../home-tab/home-tab';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  homePage: any = HomeTabPage;
  contatosPage: any = ContatosTabPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
