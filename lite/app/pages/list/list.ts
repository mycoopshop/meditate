import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Content} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  templateUrl: 'build/pages/list/list.html',
})

export class ListPage {
  public flag,item;

  subMenus: Array<{id: number, title: string, parent_id: number, type: string, child_type: number, url: string}>;
  @ViewChild(Content) content: Content;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    
    this.flag = "0";
    this.subMenus = [
      { id: 1,  title: 'Challenges',      parent_id: 0, type: 'menu', child_type: 1, url: 'assets/experience/The-8-Day-Challenge.html'},
      { id: 2,  title: 'Explore',         parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 3,  title: 'Meditate Now',    parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 4,  title: 'Read',            parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 5,  title: 'Donate Now',      parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 6,  title: 'Exp Sub Menu',    parent_id: 3, type: 'html', child_type: 1, url: 'assets/experience/201-How-to-meditate.html'},
      { id: 7,  title: 'Challenges Sub',  parent_id: 1, type: 'menu', child_type: 1, url: ''},
      { id: 8,  title: 'Exp Sub Menu',    parent_id: 3, type: 'html', child_type: 2, url: 'assets/experience/202.Mindful-Check-In-9mins.html'},
      { id: 9,  title: 'Explor Sub menu', parent_id: 2, type: 'list', child_type: 1, url: ''},
      { id: 10, title: 'Challenges Sub',  parent_id: 1, type: 'menu', child_type: 2, url: ''},
      { id: 11, title: 'Exp Sub Menu',    parent_id: 3, type: 'html', child_type: 1, url: 'assets/experience/203.Mindfulness-of-the-Breath-10mins.html'},
      { id: 12, title: 'Challenges Sub',  parent_id: 1, type: 'menu', child_type: 3, url: ''},
      { id: 13, title: 'Others Sub menu', parent_id: 5, type: 'html', child_type: 2, url: 'assets/more/501.Getting-to-the-heart-of-it-video.html'},
      { id: 14, title: 'Explor Sub menu', parent_id: 2, type: 'list', child_type: 1, url: ''},
      { id: 15, title: 'Exp SubSub menu', parent_id: 6, type: 'menu', child_type: 3, url: ''},
      { id: 16, title: 'Chlng Sub Menu',  parent_id: 1, type: 'html', child_type: 4, url: 'assets/challenge/dayChallenge.html'},
      { id: 17, title: 'Chlng SubSub Mn', parent_id: 7, type: 'menu', child_type: 4, url: ''},
      { id: 18, title: 'Others Sub menu', parent_id: 5, type: 'html', child_type: 3, url: 'assets/more/505.Getting-to-the-heart-of-it.html'},
      { id: 19, title: 'Donate SubMenu',  parent_id: 4, type: 'menu', child_type: 1, url: ''},
      { id: 20, title: 'Challenges Sub',  parent_id: 1, type: 'menu', child_type: 4, url: ''},
      { id: 21, title: 'Explor Sub Menu', parent_id: 2, type: 'list', child_type: 3, url: ''},
      { id: 22, title: 'Donate SubMenu',  parent_id: 4, type: 'menu', child_type: 3, url: ''},
      { id: 23, title: 'Explor Sub Menu', parent_id: 2, type: 'html', child_type: 2, url: 'assets/knowledge/1.Intro-to-the-book/300.Introduction-to-this-book.html'},
      { id: 24, title: 'Exp SubSub menu', parent_id: 6, type: 'menu', child_type: 1, url: ''},
      { id: 25, title: 'Chlng SubSub Mn', parent_id: 7, type: 'list', child_type: 1, url: ''},
      { id: 26, title: 'demo sesfds menu',parent_id: 10,type: 'list', child_type: 1, url: ''}
    ];
  }

  sayHello(str) {
    this.flag = str;};
  
  getValue() {
    //this.flag = str;
    return this.flag;
  };
  
  scrollTo() {
    this.content.scrollTo(0, 500, 200);
  }

}
