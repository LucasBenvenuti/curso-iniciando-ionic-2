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
import { GridPage } from '../pages/grid/grid';
import { ModalPage } from '../pages/modal/modal';
import { NavigationPage } from '../pages/navigation/navigation';
import { TabPage } from '../pages/tab/tab';
//import { HomeTabPage } from '../pages/home-tab/home-tab';
//import { ContatosTabPage } from '../pages/contatos-tab/contatos-tab';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';

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
      {component: ListPage, title: 'List', icon: 'game-controller-a'},
      {component: GridPage, title: 'Grid', icon: 'magnet'},
      {component: ModalPage, title: 'Modal', icon: 'ios-game-controller-a-outline'},
      {component: NavigationPage, title: 'Navitation', icon: 'ios-game-controller-b-outline'},
      {component: TabPage, title: 'Tab', icon: 'ios-tennisball-outline'},
      {component: ToastPage, title: 'Toast', icon: 'card'},
      {component: ToolbarPage, title: 'Toolbar', icon: 'pricetags'}


    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}
