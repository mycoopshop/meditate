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
      { title: 'WELCOME',                    type: 'main menu',  component: VideoPage },
      { title: 'Introduction',               type: 'sub menu' ,  component: 'assets/4.read/Ch.5.The-art-of-allowing/356.Start.html'     },
      { title: 'How to use this app',        type: 'sub menu' ,  component: 'assets/4.read/Ch.5.The-art-of-allowing/357.5.A-bit-about-me.html'     },
      { title: 'ABOUT',                      type: 'main menu',  component: AudioPage     },
      { title: 'Mindfulness in a few words', type: 'sub menu' ,  component: 'assets/4.read/Ch.5.The-art-of-allowing/357.What-am-i-noticing.html'     },
      { title: 'Psychology influences',      type: 'sub menu' ,  component: 'assets/4.read/Ch.5.The-art-of-allowing/358.5.The-Observer-Within-part-two.html'     },
      { title: 'About Reuben',               type: 'sub menu' ,  component: 'assets/4.read/Ch.5.The-art-of-allowing/358.The-Observer-Within-part-one.html' },
      { title: 'About Mindful Creation',     type: 'sub menu' ,  component: 'assets/4.read/Ch.5.The-art-of-allowing/359.5.Phase-one-Expanding.html' },
      { title: 'Disclaimer',                 type: 'sub menu' ,  component: 'assets/4.read/Ch.4.Patterns-of-behaviour/1.The-little-patterns/338.Summary.html' },
      { title: 'Terms and Conditions',       type: 'sub menu' ,  component: 'assets/4.read/Ch.4.Patterns-of-behaviour/2.Inner-resistance/343.The-feeling-good-trap-part-one.html' },
      { title: 'SETTINGS',                   type: 'main menu',  component: PopUpPage      },
      { title: 'Random insights',            type: 'sub menu' ,  component: 'assets/4.read/Ch.3.Mind-and-emotions/3.Feelings-as-feelings/332.Summary.html' },
      { title: 'Random meditation tips',     type: 'sub menu' ,  component: 'assets/4.read/Ch.3.Mind-and-emotions/3.Feelings-as-feelings/331.End-of-section.html' },
      { title: 'MY VIDEO',                   type: 'main menu',  component: VideoPage },
      { title: 'MORE',                       type: 'main menu',  component: AudioPage },
      { title: 'Tap me!',                    type: 'sub menu' ,  component: 'assets/4.read/Ch.4.Patterns-of-behaviour/2.Inner-resistance/341.5.Quick-fixes.html' },
      { title: 'Set reminder',               type: 'sub menu' ,  component: 'assets/4.read/Ch.4.Patterns-of-behaviour/2.Inner-resistance/345.Neuro-what.html' },
      { title: 'Share with friends',         type: 'sub menu' ,  component: 'assets/4.read/Ch.4.Patterns-of-behaviour/3.Resistance-traps/348.Start.html' },
      { title: 'Sign up',                    type: 'sub menu' ,  component: 'assets/4.read/Ch.4.Patterns-of-behaviour/3.Resistance-traps/355.Summary.html' },
      { title: 'Our apps',                   type: 'sub menu' ,  component: 'assets/4.read/Ch.5.The-art-of-allowing/356.Start.html' },
      { title: 'News',                       type: 'sub menu' ,  component: 'assets/3.Challenges/8-Day-Challenge/401.The-8-Day-Challenge.html' },
      { title: 'Thank you',                  type: 'sub menu' ,  component: 'assets/3.Challenges/8-Day-Micro-Course/408.Module-6-Resistance-traps.html' }
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
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);

