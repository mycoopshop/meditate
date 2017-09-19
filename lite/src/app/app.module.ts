import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu';
import { VideoPage } from '../pages/video/video';
import { ViewPage } from '../pages/view/view';
import { SettingPage } from '../pages/setting/setting';
import { PopUpPage } from '../pages/pop-up/pop-up';
import { MediaPage } from '../pages/media/media';
import { ExploreMenuPage } from '../pages/explore-menu/explore-menu';
import { ExploreMenuListPage } from '../pages/explore-menu-list/explore-menu-list';
import { ReadMenuListPage } from '../pages/read-menu-list/read-menu-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ListPage,
    MenuPage,
    VideoPage,
    ExploreMenuPage,
    ExploreMenuListPage,
    ReadMenuListPage,
    ViewPage,
    PopUpPage,
    SettingPage,
    MediaPage
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ListPage,
    MenuPage,
    VideoPage,
    ExploreMenuPage,
    ExploreMenuListPage,
    ReadMenuListPage,
    ViewPage,
    PopUpPage,
    SettingPage,
    MediaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
