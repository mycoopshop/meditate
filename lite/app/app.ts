import {ionicBootstrap, Platform, MenuController, Nav}  from 'ionic-angular';
import {Component, ViewChild}                           from '@angular/core';
import {StatusBar}       from 'ionic-native';
import {HelloIonicPage}  from './pages/hello-ionic/hello-ionic';
import {ListPage}        from './pages/list/list';
import {PopUpPage}       from './pages/pop-up/pop-up';
import {VideoPage}       from './pages/video/video';
import {AudioPage}       from './pages/audio/audio';
import {ViewPage}        from './pages/view/view';

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
      { title: 'Introduction',               type: 'sub menu' ,  component: 'assets/read/ch_5_the_art_of_allowing/the_art_of_allowing.html' },
      { title: 'How to use this app',        type: 'sub menu' ,  component: 'assets/challenges/eight_day_micro_course/module_eight_turning_towards.html' },
      { title: 'ABOUT',                      type: 'main menu',  component: AudioPage     },
      { title: 'Mindfulness in a few words', type: 'sub menu' ,  component: 'assets/read/ch_5_the_art_of_allowing/the_observer_within_part_two.html' },
      { title: 'Psychology influences',      type: 'sub menu' ,  component: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/in_or_out_of_control.html' },
      { title: 'About Reuben',               type: 'sub menu' ,  component: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/normal_human_emotions.html' },
      { title: 'About Mindful Creation',     type: 'sub menu' ,  component: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/associations_part_two.html' },
      { title: 'Disclaimer',                 type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/overcoming_boredom_part_one.html' },
      { title: 'Terms and Conditions',       type: 'sub menu' ,  component: 'assets/challenges/eight_day_micro_course/end_of_course.html' },
      { title: 'SETTINGS',                   type: 'main menu',  component: PopUpPage      },
      { title: 'Random insights',            type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html' },
      { title: 'Random meditation tips',     type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/guided_mindfulness/getting_with_the_flow_seven_mins.html' },
      { title: 'MY VIDEO',                   type: 'main menu',  component: VideoPage },
      { title: 'MORE',                       type: 'main menu',  component: AudioPage },
      { title: 'Tap me!',                    type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html' },
      { title: 'Set reminder',               type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/guided_mindfulness/getting_with_the_flow_seven_mins.html' },
      { title: 'Share with friends',         type: 'sub menu' ,  component: 'assets/explore/i_like_them_short/experiential_exercises/stories_on_a_stream.html' },
      { title: 'Sign up',                    type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_one.html' },
      { title: 'Our apps',                   type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/overcoming_boredom_part_one.html' },
      { title: 'News',                       type: 'sub menu' ,  component: 'assets/read/ch_2_introduction_to_mindfulness/a_new_dimension_to_things.html' },
      { title: 'Thank you',                  type: 'sub menu' ,  component: 'assets/challenges/eight_day_micro_course/module_four_emotions_and_feeling.html' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  viewPage(url) {
    this.menu.close();
    this.nav.push(ViewPage, {
      url: url
    });
  }
  
}

ionicBootstrap(MyApp);

