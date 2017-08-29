import {NavController, NavParams, Content}    from 'ionic-angular';
import {Component, ViewChild}     from '@angular/core';
import {ExploreMenuPage}          from '../explore-menu/explore-menu';
import {ExploreViewPage}          from '../explore-view/explore-view';
import {MenuPage}                 from '../menu/menu';
import {ListPage}                 from '../list/list';
import {VideoPage}                from '../video/video';

@Component({
  templateUrl: 'build/pages/read-menu-list/read-menu-list.html',
})

export class ReadMenuListPage {
  selectedId: any;
  selectedTitle: string;
  parentId: any;
  parentTitle :string;
  public breadcrumbs = [];

  listMenuId: any;
  listMenuPId: any;
  MainMenuPTitle: string;
  ListMenuTitle: string;
  
  subMenus: Array<{id: number, border_type:number, title: string, platform: string,  contain: string, parent_id: number, type: string, stage:string, child_type: number, time: string, url: string}>;
  @ViewChild(Content) content: Content;
  
  constructor(private navCtrl: NavController, navParams: NavParams) {
    
    this.selectedId = navParams.get('readMenuId'); 
    this.selectedTitle = navParams.get('title');
    this.listMenuId = navParams.get('readMenuId');
    this.listMenuPId = navParams.get('readMenuPId');
    this.MainMenuPTitle = navParams.get('readMenuParentTitle');
    this.ListMenuTitle = navParams.get('clickedTitle');
    this.breadcrumbs.push(this.ListMenuTitle);
    
    this.subMenus = [  
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

    // for(var m of this.subMenus){
    //   if(this.selectedId ==  m.id)
    //   {
    //     this.selectedTitle = m.title;
    //     this.breadcrumbs.push(this.selectedTitle);
    //   }
    //   else {
    //     this.parentTitle = ' ';
    //   }
    // }
  }

  htmlList(event, Id, PId, PTitle, ReadMenuTitle) {
    this.navCtrl.push(VideoPage, {
      listMenuId: Id,
      listMenuPId: PId,
      mainMenuParentTitle: PTitle,
      readMenuTitle: ReadMenuTitle,
      backButtonCount: 2,
      breadcrumbsCollection: this.breadcrumbs
    });
  }

  goBack() {
    if(this.listMenuPId != undefined)
      {
        this.navCtrl.insert(1,ListPage, {
          menuId: this.listMenuPId
        },{direction: 'back'});
      }
    else
      {
        this.navCtrl.insert(1,ListPage, {
          menuId: 4
        },{direction: 'back'});
      }
  }

  goToHome() {
    this.navCtrl.insert(0, MenuPage,{},{direction: 'back', duration: 610});
  }
  
}
