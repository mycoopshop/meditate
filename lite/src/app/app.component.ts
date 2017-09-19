import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ListPage } from '../pages/list/list';
// import { VideoPage }       from '../pages/video/video';
import { PopUpPage}       from '../pages/pop-up/pop-up';
import { MediaPage }       from '../pages/media/media';
import { SettingPage }     from '../pages/setting/setting';
import { ViewPage }        from '../pages/view/view';
import { MenuPage }        from '../pages/menu/menu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array <{title: string, component: any, type: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'START HERE',                            type: 'main menu',  component: MenuPage },
      { title: 'Welcome',                               type: 'sub menu' ,  component: 'assets/read/ch_5_the_art_of_allowing/the_art_of_allowing.html' },
      { title: 'Why do this?',                          type: 'sub menu' ,  component: 'assets/read/ch_5_the_art_of_allowing/the_art_of_allowing.html' },
      { title: 'How to use this app',                   type: 'sub menu' ,  component: 'assets/challenges/eight_day_micro_course/module_eight_turning_towards.html' },
      { title: 'INTRO VIDEOS',                          type: 'main menu',  component: PopUpPage },
      { title: 'Mindfulness is like a triangle',        type: 'sub menu' ,  component: 'assets/read/ch_5_the_art_of_allowing/the_observer_within_part_two.html' },
      { title: 'BMW',                                   type: 'sub menu' ,  component: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/in_or_out_of_control.html' },
      { title: 'How to practice mindfulness',           type: 'sub menu' ,  component: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/normal_human_emotions.html' },
      { title: "When your mind says “I can't do it!”" , type: 'sub menu' ,  component: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/associations_part_two.html' },
      { title: 'Thought are like rain on windscreen',   type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/overcoming_boredom_part_one.html' },
      { title: 'SETTINGS',                              type: 'main menu',  component: SettingPage },
      { title: 'Random insights reminder',              type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html' },
      { title: 'MY DOWNLOADS',                          type: 'main menu',  component: MediaPage },
      { title: 'My video and audio downloads',          type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/guided_mindfulness/getting_with_the_flow_seven_mins.html' },
      { title: 'ABOUT ME',                              type: 'main menu',  component: MenuPage },
      { title: 'About Reuben',                          type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html' },
      { title: 'Psychology influences',                 type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html' },
      { title: 'About Mindfulness Creation',            type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html' },
      { title: 'MORE',                                     type: 'main menu',  component: MenuPage },
      { title: 'Tap me!',                                  type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html' },
      { title: 'Share with friends',                       type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/experiential_exercises/stories_on_a_stream.html' },
      { title: 'Sign up',                                  type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/guided_mindfulness/getting_with_the_flow_seven_mins.html' },
      { title: 'Our apps',                                 type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/overcoming_boredom_part_one.html' },
      { title: 'News',                                     type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/a_new_dimension_to_things.html' },
      { title: 'Thank you',                                type: 'sub menu' ,  component: 'assets/challenges/eight_day_micro_course/module_four_emotions_and_feeling.html' },
      { title: 'Disclaimer',                               type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_one.html' },
      { title: 'Privacy policy and terms and conditions',  type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_one.html' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  goToHome() {
    this.nav.insert(0, MenuPage,{},{direction: 'back', duration: 490});
  }

  viewPage(url) {
    this.menu.close();
    this.nav.push(ViewPage, {
      url: url
    });
  } 
}
