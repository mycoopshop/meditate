import {Component, ViewChild}                           from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav}  from 'ionic-angular';
import {StatusBar}       from 'ionic-native';
import {HelloIonicPage}  from './pages/hello-ionic/hello-ionic';
import {ListPage}        from './pages/list/list';
import {PopUpPage}       from './pages/pop-up/pop-up';
import {VideoPage}       from './pages/video/video';
import {AudioPage}       from './pages/audio/audio';


@Component({
  templateUrl: 'build/app.html'
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HelloIonicPage;
  pages: Array <{title: string, component: any, type: string}>;

  constructor(
      private platform: Platform,
      private menu: MenuController
    ) 
  {
    this.initializeApp();

    this.pages = [
      { title: 'WELCOME',                     component: HelloIonicPage, type: 'main menu'},
      { title: 'Introduction',                component: VideoPage,      type: 'sub menu' },
      { title: 'How to use this app',         component: AudioPage,      type: 'sub menu' },
      { title: 'ABOUT',                       component: HelloIonicPage, type: 'main menu'},
      { title: 'Mindfulness in a few words',  component: PopUpPage,      type: 'sub menu' },
      { title: 'Psychology influences',       component: VideoPage,      type: 'sub menu' },
      { title: 'About Reuben',                component: HelloIonicPage, type: 'sub menu' },
      { title: 'About Mindful Creation',      component: HelloIonicPage, type: 'sub menu' },
      { title: 'Disclaimer',                  component: HelloIonicPage, type: 'sub menu' },
      { title: 'Terms and Conditions',        component: HelloIonicPage, type: 'sub menu' },
      { title: 'SETTINGS',                    component: HelloIonicPage, type: 'main menu'},
      { title: 'Random insights',             component: HelloIonicPage, type: 'sub menu' },
      { title: 'Random meditation tips',      component: HelloIonicPage, type: 'sub menu' },
      { title: 'MY VIDEO',                    component: HelloIonicPage, type: 'main menu'},
      { title: 'MORE',                        component: HelloIonicPage, type: 'main menu'},
      { title: 'Tap me!',                     component: HelloIonicPage, type: 'sub menu' },
      { title: 'Set reminder',                component: HelloIonicPage, type: 'sub menu' },
      { title: 'Share with friends',          component: HelloIonicPage, type: 'sub menu' },
      { title: 'Sign up',                     component: HelloIonicPage, type: 'sub menu' },
      { title: 'Our apps',                    component: HelloIonicPage, type: 'sub menu' },
      { title: 'News',                        component: HelloIonicPage, type: 'sub menu' },
      { title: 'Thank you',                   component: HelloIonicPage, type: 'sub menu' }

      //{ title: 'Home Page',   component: HelloIonicPage },
      //{ title: 'Menu Page',   component: ListPage },
      //{ title: 'Audios Page', component: AudioPage },
      //{ title: 'Videos Page', component: VideoPage },
      //{ title: 'PopUp Page',  component: PopUpPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
