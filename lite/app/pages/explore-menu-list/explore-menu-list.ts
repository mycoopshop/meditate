import {NavController, NavParams, Content, SqlStorage, Storage} from 'ionic-angular';
import {Component, ViewChild}   from '@angular/core';
import {ExploreMenuPage}        from '../explore-menu/explore-menu';
import {ExploreViewPage}        from '../explore-view/explore-view';
import {MenuPage}               from '../menu/menu';

@Component({
  templateUrl: 'build/pages/explore-menu-list/explore-menu-list.html',
})

export class ExploreMenuListPage {
  selectedId: any;
  selectedTitle: string;
  parentId: any;
  parentTitle :string;
  public breadcrumbs = [];

  listMenuId: any;
  listMenuPId: any;
  MainMenuPTitle: string;
  ListMenuPTitle: string;
  BreadcrumbsCollection :any;

  subMenus: Array<{id: number, border_type:number, title: string, platform: string,  contain: string, parent_id: number, type: string, stage:string, child_type: number, time: string, url: string}>;
  @ViewChild(Content) content: Content;

  constructor(private navCtrl: NavController, navParams: NavParams) {

    this.selectedId = navParams.get('expMenuId');
    this.selectedTitle = navParams.get('title');
    this.listMenuId = navParams.get('expMenuId');
    this.listMenuPId = navParams.get('expMenuPrntId');
    this.MainMenuPTitle = navParams.get('expMenuParentTitle');
    this.ListMenuPTitle = navParams.get('mainMenuParentTitle');
    this.BreadcrumbsCollection = navParams.get('breadcrumbsCollection');

    this.subMenus = [
      { id: 35,  border_type: 1, parent_id: 8,   title: 'Guided Mindfulness',                              platform: '1',  contain: 'none',   type: 'list', stage: 'empty', child_type: 1, time: ' ', url: ''},
      { id: 36,  border_type: 2, parent_id: 8,   title: 'Experiential Exercises',                          platform: '2',  contain: 'none',   type: 'list', stage: 'empty', child_type: 2, time: ' ', url: ''},
      { id: 37,  border_type: 3, parent_id: 8,   title: 'Tips And Tools',                                  platform: '3',  contain: 'none',   type: 'list', stage: 'empty', child_type: 3, time: ' ', url: ''},
      { id: 38,  border_type: 1, parent_id: 9,   title: 'Guided Mindfulness',                              platform: '1',  contain: 'none',   type: 'list', stage: 'empty', child_type: 1, time: ' ', url: ''},
      { id: 39,  border_type: 2, parent_id: 9,   title: 'Experiential Exercises',                          platform: '2',  contain: 'none',   type: 'list', stage: 'empty', child_type: 2, time: ' ', url: ''},
      { id: 40,  border_type: 3, parent_id: 9,   title: 'Tips And Tools',                                  platform: '3',  contain: 'none',   type: 'list', stage: 'empty', child_type: 3, time: ' ', url: ''},
      { id: 41,  border_type: 1, parent_id: 10,  title: 'Guided Mindfulness',                              platform: '1',  contain: 'none',   type: 'list', stage: 'empty', child_type: 1, time: ' ', url: ''},
      { id: 42,  border_type: 2, parent_id: 10,  title: 'Experiential Exercises',                          platform: '2',  contain: 'none',   type: 'list', stage: 'empty', child_type: 2, time: ' ', url: ''},
      { id: 43,  border_type: 3, parent_id: 10,  title: 'Tips And Tools',                                  platform: '3',  contain: 'none',   type: 'list', stage: 'empty', child_type: 3, time: ' ', url: ''},
      { id: 44,  border_type: 1, parent_id: 31,  title: 'Your Mind',                                       platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, time: ' ', url: ''},
      { id: 45,  border_type: 2, parent_id: 31,  title: 'Thoughts-as-thoughts',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, time: ' ', url: ''},
      { id: 46,  border_type: 3, parent_id: 31,  title: 'Feelings-as-feelings',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, time: ' ', url: ''},
      { id: 47,  border_type: 1, parent_id: 32,  title: 'The little patterns',                             platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, time: ' ', url: ''},
      { id: 48,  border_type: 2, parent_id: 32,  title: 'Inner resistance',                                platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, time: ' ', url: ''},
      { id: 49,  border_type: 3, parent_id: 32,  title: 'Resistance traps',                                platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, time: ' ', url: ''},
      { id: 50,  border_type: 1, parent_id: 35,  title: 'An imaginary line',                               platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(8 mins)',    url: 'assets/explore/i_like_them_short/guided_mindfulness/mindfulness_is_like_a_triangle.html'},
      { id: 51,  border_type: 2, parent_id: 35,  title: 'An imaginary balloon',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(8 mins)',    url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 52,  border_type: 1, parent_id: 35,  title: 'Choose it - use it',                              platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(8 mins)',    url: 'assets/explore/i_like_them_short/guided_mindfulness/choose_it_use_it_eight_mins.html'},
      { id: 53,  border_type: 2, parent_id: 35,  title: 'Getting grounded',                                platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(9 mins)',    url: 'assets/explore/i_like_them_short/guided_mindfulness/getting_with_the_flow_seven_mins.html'},
      { id: 54,  border_type: 3, parent_id: 35,  title: 'Location, location, location',                    platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(8 mins)',    url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_line_eight_mins.html'},
      { id: 55,  border_type: 3, parent_id: 35,  title: 'In my room',                                      platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(9 mins)',    url: 'assets/explore/i_like_them_short/guided_mindfulness/the_world_outside_eleven_mins.html'},
      { id: 56,  border_type: 1, parent_id: 36,  title: 'Stories on a stream',                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(8 mins)',    url: 'assets/explore/i_like_them_short/experiential_exercises/stories_on_a_stream.html'},
      { id: 57,  border_type: 1, parent_id: 36,  title: "The don't think about it exercise",               platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(3 mins)',    url: 'assets/explore/i_like_them_short/guided_mindfulness/being_in_the_body_eleven_mins.html'},
      { id: 58,  border_type: 2, parent_id: 36,  title: 'Urge surfing',                                    platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(NA)',        url: 'assets/explore/i_like_them_short/experiential_exercises/three_minute_nothing_exercise.html'},
      { id: 59,  border_type: 3, parent_id: 36,  title: 'Be here now... and may be with a friend',         platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(No audio)',  url: 'assets/explore/i_like_them_short/experiential_exercises/be_herep_now_and_maybe.html'},
      { id: 60,  border_type: 1, parent_id: 37,  title: 'Mindfulness is like a triangle',                  platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(video)',     url: 'assets/explore/i_like_them_short/tips_and_tools/one_minute_bmw.html'},
      { id: 61,  border_type: 2, parent_id: 37,  title: 'BMW',                                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(1 min)',     url: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html'},
      { id: 62,  border_type: 3, parent_id: 37,  title: 'How to practice mindfulness ',                    platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(video)',     url: 'assets/explore/i_like_them_short/tips_and_tools/labelling.html'},
      { id: 63,  border_type: 1, parent_id: 37,  title: "When your mind says “I can't do it.”",            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(video)',     url: 'assets/explore/i_like_them_short/tips_and_tools/sos_one.html'},
      { id: 64,  border_type: 1, parent_id: 37,  title: "SOS",                                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: "(tap here if you're feeling overwhelmed)", url: 'assets/explore/i_like_them_short/tips_and_tools/sos_one.html'},
      { id: 65,  border_type: 1, parent_id: 38,  title: 'Check in',                                        platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(11 mins)',   url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 66,  border_type: 2, parent_id: 38,  title: 'Tune in to the bell',                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(4 mins)',    url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 67,  border_type: 3, parent_id: 38,  title: 'Choose it - use it (extended)',                   platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(22 mins)',   url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 68,  border_type: 1, parent_id: 38,  title: 'The breath and beyond',                           platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(22 mins)',   url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 69,  border_type: 2, parent_id: 38,  title: 'Body-mind-world',                                 platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(15 mins)',   url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 70,  border_type: 3, parent_id: 38,  title: 'Get out there',                                   platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(22 mins)',   url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 71,  border_type: 1, parent_id: 38,  title: 'On your own with others ',                        platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(22 mins)',   url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 72,  border_type: 3, parent_id: 39,  title: 'Balloons in the sky',                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(11 mins)',   url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 73,  border_type: 1, parent_id: 39,  title: 'Thoughts as things',                              platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(4 mins)',    url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 74,  border_type: 2, parent_id: 39,  title: 'The Observer',                                    platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(17 mins)',   url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 75,  border_type: 1, parent_id: 40,  title: 'Anchoring',                                       platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(No audio)',  url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 76,  border_type: 2, parent_id: 40,  title: 'This is it',                                      platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(No audio)',  url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 77,  border_type: 3, parent_id: 40,  title: 'Stepping back',                                   platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(video)',     url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 78,  border_type: 1, parent_id: 40,  title: 'SOS',                                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: "(Enter here if you're feeling overwhelmed)", url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 89,  border_type: 1, parent_id: 41,  title: 'A trip to the movies',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(17 mins)',   url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 80,  border_type: 2, parent_id: 41,  title: "Don't mind the gap",                              platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(27 mins)',   url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 81,  border_type: 3, parent_id: 41,  title: 'The 4 phase practice',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(27 mins)',   url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 82,  border_type: 1, parent_id: 41,  title: 'The body and beyond',                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(33 mins)',   url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 83,  border_type: 2, parent_id: 41,  title: 'Choose it - use it (super extended)',             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(33 mins)',   url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 84,  border_type: 3, parent_id: 41,  title: "This one's too long (or is that just a thought)", platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(38 mins)',   url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 85,  border_type: 1, parent_id: 42,  title: 'Making space (for feelings)',                     platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(video)',     url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 86,  border_type: 2, parent_id: 42,  title: 'A curious telescope (for feelings)',              platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(11 mins)',   url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 87,  border_type: 3, parent_id: 42,  title: 'An expanding balloon (for feelings)',             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(11 mins)',   url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 88,  border_type: 1, parent_id: 42,  title: "Here's the thing (for feelings)",                 platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(11 mins)',   url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 89,  border_type: 2, parent_id: 43,  title: '2 minute stress release',                         platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(2 mins)',    url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 90,  border_type: 1, parent_id: 43,  title: '3 minute BMW',                                    platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(3 mins)',    url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 91,  border_type: 2, parent_id: 43,  title: 'Remember who you are',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: '(3 mins)',    url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 92,  border_type: 3, parent_id: 43,  title: 'SOS',                                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, time: "(Enter here if you're feeling overwhelmed)", url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'}
    ];

    for(var m of this.subMenus){
      if(this.selectedId ==  m.id)
      {
        this.selectedTitle = m.title;
        this.breadcrumbs.push(this.selectedTitle);
      }
      else {
        this.parentTitle = ' ';
      }
    }

  }

  viewPage(event, url, id) {
    this.navCtrl.push(ExploreViewPage, {
      url: url,
      parent_id: id,
      exploreMenuListTitle: this.BreadcrumbsCollection
    });
  }

  goBack() {
    console.log('selectedId= '+this.selectedId);
    if(this.selectedId == 1 || this.selectedId == 2 || this.selectedId == 3 || this.selectedId == 4)
    {
      this.navCtrl.insert(0, MenuPage,{},{direction: 'back', duration: 0, animate: false});
    }
    else if(this.parentId != null) {
      this.navCtrl.insert(0, ExploreMenuPage, {
        listMenuId: this.parentId
      },{direction: 'back', duration: 0, animate: false});
    }
    else {
      var pId;
        for(var menu of this.subMenus){
          if(this.selectedId ==  menu.id)
          {
            pId = menu.parent_id;
            break;
          }
        }
        this.navCtrl.insert(0, ExploreMenuPage, {
        listMenuId: pId
      },{direction: 'back', duration: 0, animate: false});
    }
  }

  goToHome() {
    this.navCtrl.insert(0, MenuPage,{},{direction: 'back', duration: 610, animate: false});
  }

}
