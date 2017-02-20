import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';
import { ConnectionService } from '../providers/connection-service';
import { AlertPage } from '../pages/alert/alert';
import { ButtonTestPage } from '../pages/button-test/button-test';
import { CardTestPage } from '../pages/card-test/card-test';
import { IconTestPage } from '../pages/icon-test/icon-test';
import { InputsPage } from '../pages/inputs/inputs';
import { ListPage } from '../pages/list/list';
import { GridPage } from '../pages/grid/grid';
import { ModalPage } from '../pages/modal/modal';
import { ModalLoginPage } from '../pages/modal-login/modal-login';
import { NavigationPage } from '../pages/navigation/navigation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestPage,
    GeneratedTestPage,
    AlertPage,
    ButtonTestPage,
    CardTestPage,
    IconTestPage,
    InputsPage,
    ListPage,
    GridPage,
    ModalPage,
    ModalLoginPage,
    NavigationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestPage,
    GeneratedTestPage,
    AlertPage,
    ButtonTestPage,
    CardTestPage,
    IconTestPage,
    InputsPage,
    ListPage,
    GridPage,
    ModalPage,
    ModalLoginPage,
    NavigationPage
  ],
  providers: [ConnectionService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
