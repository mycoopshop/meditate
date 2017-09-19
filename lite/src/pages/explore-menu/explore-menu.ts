import {NavController, NavParams, Content} from 'ionic-angular';
import {Component, ViewChild}   from '@angular/core';
import {ExploreMenuListPage}    from '../explore-menu-list/explore-menu-list';
import {ListPage}               from '../list/list';
import {MenuPage}               from '../menu/menu';

@Component({
  templateUrl: 'explore-menu.html',
})

export class ExploreMenuPage {
  selectedId: any;
  selectedTitle: string;
  rootPage: any = ListPage;
  parentId: any;
  parentTitle :string;
  public breadcrumbs = [];
  public BreadList: Array<any>;

  listMenuId: any;
  listMenuPId: any;
  MainMenuPTitle: string;
  ListMenuPTitle: string;
  BreadcrumbsCollection :any;
  nac: any;

  subMenus: Array<{id: number, border_type:number, title: string, platform: string,  contain: string, parent_id: number, type: string, stage:string, child_type: number, time: string, url: string}>;
  @ViewChild(Content) content: Content;

  constructor(private navCtrl: NavController, navParams: NavParams) {

    //$('#slideRight').animate({"margin-right": '+=200'});

    var navOptions = {
      animate: false,
      duration: 0
      //animation: 'wp-transition'
    };

    this.nac = navOptions;

    this.selectedId = navParams.get('listMenuId');
    this.selectedTitle = navParams.get('title');
    this.listMenuId = navParams.get('listMenuId');
    this.listMenuPId = navParams.get('listMenuPId');
    this.MainMenuPTitle = navParams.get('mainMenuParentTitle');
    this.ListMenuPTitle = navParams.get('listMenuParentTitle');
    this.BreadcrumbsCollection = navParams.get('breadcrumbsCollection');

    this.subMenus = [
      { id: 8,   border_type: 1, parent_id: 2,   title: "I like them short",                               platform: '1',  contain: 'none',   type: 'menu', stage: 'empty', child_type: 1, time: ' ', url: ''},
      { id: 9,   border_type: 2, parent_id: 2,   title: "I'm used to this",                                platform: '2',  contain: 'none',   type: 'menu', stage: 'empty', child_type: 1, time: ' ', url: ''},
      { id: 10,  border_type: 3, parent_id: 2,   title: "Let's go deeper",                                 platform: '3',  contain: 'none',   type: 'menu', stage: 'empty', child_type: 3, time: ' ', url: ''},
      { id: 11,  border_type: 1, parent_id: 3,   title: 'An Imaginary Line',                               platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 1, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 12,  border_type: 2, parent_id: 3,   title: 'An Imaginary Balloon',                            platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 13,  border_type: 3, parent_id: 3,   title: 'Choose It - Use It',                              platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 14,  border_type: 1, parent_id: 3,   title: 'Getting With The Flow',                           platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 15,  border_type: 2, parent_id: 3,   title: 'Awareness trainin with a bell',                   platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 16,  border_type: 3, parent_id: 3,   title: 'The Word outside',                                platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 17,  border_type: 1, parent_id: 3,   title: 'Being in the body',                               platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 18,  border_type: 2, parent_id: 3,   title: 'Mindful check In',                                platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 19,  border_type: 3, parent_id: 3,   title: 'Choose It - Use It',                              platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 20,  border_type: 1, parent_id: 3,   title: 'The Breath and Beyond',                           platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 21,  border_type: 2, parent_id: 3,   title: 'Body-Mind-World',                                 platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 22,  border_type: 3, parent_id: 3,   title: 'Out and about',                                   platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 23,  border_type: 1, parent_id: 3,   title: 'With the World',                                  platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 24,  border_type: 2, parent_id: 3,   title: 'Letting go of controll',                          platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 25,  border_type: 3, parent_id: 3,   title: 'The Body and Beyond',                             platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 26,  border_type: 1, parent_id: 3,   title: 'The four phase practice',                         platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 27,  border_type: 2, parent_id: 3,   title: 'Nothing Matters',                                 platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 28,  border_type: 3, parent_id: 3,   title: 'Releasing Resistance',                            platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 29,  border_type: 1, parent_id: 4,   title: 'Intro to the book',                               platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 3, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 30,  border_type: 2, parent_id: 4,   title: 'Introduction to mindfulness',                     platform: '1',  contain: 'none',   type: 'html', stage: 'final', child_type: 3, time: ' ', url: 'assets/read/ch_2_introduction_to_mindfulness/start.html'},
      { id: 31,  border_type: 3, parent_id: 4,   title: 'Mind and emotions',                               platform: '2',  contain: 'none',   type: 'html', stage: 'empty', child_type: 4, time: ' ', url: ''},
      { id: 32,  border_type: 1, parent_id: 4,   title: 'Patterns of behaviour',                           platform: '3',  contain: 'none',   type: 'html', stage: 'empty', child_type: 4, time: ' ', url: ''},
      { id: 33,  border_type: 2, parent_id: 4,   title: 'Making space',                                    platform: '4',  contain: 'none',   type: 'html', stage: 'final', child_type: 3, time: ' ', url: 'assets/explore/i_like_them_short/tips_and_tools/labelling.html'},
      { id: 34,  border_type: 3, parent_id: 4,   title: 'Final words',                                     platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 3, time: ' ', url: 'assets/explore/i_like_them_short/guided_mindfulness/the_world_outside_eleven_mins.html'},
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
      { id: 49,  border_type: 3, parent_id: 32,  title: 'Resistance traps',                                platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, time: ' ', url: ''}
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

  exploreMenuList(event, ExpMenuId, ExpMenuPTitle, ExpPrntId, ExpMenuPrntTitle) {
    this.navCtrl.push(ExploreMenuListPage, {
      expMenuId: ExpMenuId,
      expMenuPrntId: ExpPrntId,
      expMenuParentTitle: ExpMenuPTitle,
      mainMenuParentTitle: ExpMenuPrntTitle,
      breadcrumbsCollection: this.breadcrumbs
    }, this.nac);
  }

  goBack() {
    console.log('selectedId= '+this.selectedId);
    if(this.selectedId == 1 || this.selectedId == 2 || this.selectedId == 3 || this.selectedId == 4)
    {
      this.navCtrl.insert(0, MenuPage,{},{direction: 'back', duration: 0, animate: false});
    }
    else if(this.parentId != null) {
      this.navCtrl.insert(0, this.rootPage, {
        menuId: this.parentId
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
        this.navCtrl.insert(0, this.rootPage, {
        menuId: pId
      },{direction: 'back', duration: 0, animate: false});
    }
  }

  goToHome() {
    this.navCtrl.insert(0, MenuPage,{},{direction: 'back', duration: 610});
  }

}
