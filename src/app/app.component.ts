import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';
import { AlertPage } from '../pages/alert/alert';
import { ButtonTestPage } from '../pages/button-test/button-test';
import { CardTestPage } from '../pages/card-test/card-test';
import { IconTestPage } from '../pages/icon-test/icon-test';
import { InputsPage } from '../pages/inputs/inputs';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: Array<{component: any, title: string, icon: string }>;

  rootPage = HomePage;

  openPage(page: any, menuSide: string): void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
  }

  constructor(platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestPage, title: 'Menu Test', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated Page', icon: 'home'},
      {component: AlertPage, title: 'Alert Page', icon: 'alert'},
      {component: ButtonTestPage, title: 'Button Test', icon: 'tennisball'},
      {component: CardTestPage, title: 'Card Test', icon: 'map'},
      {component: IconTestPage, title: 'Icon Test', icon: 'ionic'},
      {component: InputsPage, title: 'Inputs', icon: 'game-controller-b'},
      {component: ListPage, title: 'List', icon: 'game-controller-a'}

    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}

//ionicBootstrap(MyApp, [ConnectionService] );
