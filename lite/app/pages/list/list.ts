import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Content} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  templateUrl: 'build/pages/list/list.html',
})

export class ListPage {
  public flag;

  subMenus: Array<{id: number, border_type:number, title: string, parent_id: number, type: string, child_type: number, url: string}>;
  @ViewChild(Content) content: Content;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    
    this.flag = "0";
    this.subMenus = [
      { id: 1,  border_type: 1, title: 'Challenges',      parent_id: 0, type: 'menu', child_type: 1, url: 'assets/experience/The-8-Day-Challenge.html'},
      { id: 2,  border_type: 2, title: 'Explore',         parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 3,  border_type: 3, title: 'Meditate Now',    parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 4,  border_type: 1, title: 'Read',            parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 5,  border_type: 2, title: 'Donate Now',      parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 6,  border_type: 3, title: 'Exp Sub Menu',    parent_id: 3, type: 'html', child_type: 1, url: 'assets/experience/201-How-to-meditate.html'},
      { id: 7,  border_type: 1, title: 'Challenges Sub',  parent_id: 1, type: 'menu', child_type: 1, url: ''},
      { id: 8,  border_type: 2, title: 'Exp Sub Menu',    parent_id: 3, type: 'list', child_type: 2, url: ''},
      { id: 9,  border_type: 3, title: 'Explor Sub menu', parent_id: 2, type: 'list', child_type: 1, url: ''},
      { id: 10, border_type: 2, title: 'Challenges Sub',  parent_id: 1, type: 'menu', child_type: 2, url: ''},
      { id: 11, border_type: 1, title: 'Exp Sub Menu',    parent_id: 3, type: 'html', child_type: 1, url: 'assets/experience/203.Mindfulness-of-the-Breath-10mins.html'},
      { id: 12, border_type: 3, title: 'Challenges Sub',  parent_id: 1, type: 'menu', child_type: 3, url: ''},
      { id: 13, border_type: 1, title: 'Others Sub menu', parent_id: 5, type: 'html', child_type: 2, url: 'assets/more/501.Getting-to-the-heart-of-it-video.html'},
      { id: 14, border_type: 2, title: 'Explor Sub menu', parent_id: 2, type: 'list', child_type: 1, url: ''},
      { id: 15, border_type: 3, title: 'Exp SubSub menu', parent_id: 6, type: 'menu', child_type: 3, url: ''},
      { id: 16, border_type: 1, title: 'Chlng Sub Menu',  parent_id: 1, type: 'html', child_type: 4, url: 'assets/challenge/dayChallenge.html'},
      { id: 17, border_type: 2, title: 'Chlng SubSub Mn', parent_id: 7, type: 'menu', child_type: 4, url: ''},
      { id: 18, border_type: 2, title: 'Others Sub menu', parent_id: 5, type: 'list', child_type: 3, url: ''},
      { id: 19, border_type: 1, title: 'Donate SubMenu',  parent_id: 4, type: 'menu', child_type: 1, url: ''},
      { id: 20, border_type: 2, title: 'Challenges Sub',  parent_id: 1, type: 'menu', child_type: 4, url: ''},
      { id: 21, border_type: 1, title: 'Explor Sub Menu', parent_id: 2, type: 'list', child_type: 3, url: ''},
      { id: 22, border_type: 2, title: 'Donate SubMenu',  parent_id: 4, type: 'list', child_type: 3, url: ''},
      { id: 23, border_type: 2, title: 'Explor Sub Menu', parent_id: 2, type: 'html', child_type: 2, url: 'assets/knowledge/1.Intro-to-the-book/300.Introduction-to-this-book.html'},
      { id: 24, border_type: 1, title: 'Exp SubSub menu', parent_id: 6, type: 'menu', child_type: 1, url: ''},
      { id: 25, border_type: 3, title: 'Chlng SubSub Mn', parent_id: 7, type: 'list', child_type: 1, url: ''},
      { id: 26, border_type: 2, title: 'demo sesfds menu',parent_id: 10,type: 'list', child_type: 1, url: ''},
      { id: 27, border_type: 3, title: 'challenge list Html',      parent_id: 17, type: 'html', child_type: 3, url: 'assets/challenge/dayChallenge.html'},
      { id: 28, border_type: 2, title: 'challenge list Html',      parent_id: 25, type: 'html', child_type: 2, url: 'assets/challenge/The-8-Day-Challenge.html'},
      { id: 29, border_type: 1, title: 'Explorer for list Html',   parent_id: 9,  type: 'html', child_type: 2, url: 'assets/knowledge/1.Intro-to-the-book/300.Introduction-to-this-book.html'},
      { id: 30, border_type: 3, title: 'Explorer for list Html',   parent_id: 14, type: 'html', child_type: 2, url: 'assets/knowledge/2.Intro to mindfulness/302.What is mindfulness - part one.html'},
      { id: 30, border_type: 2, title: 'Explorer for list Html',   parent_id: 14, type: 'html', child_type: 3, url: 'assets/knowledge/2.Intro to mindfulness/303.What is mindfulness - part two.html'},
      { id: 30, border_type: 1, title: 'Explorer for list Html',   parent_id: 14, type: 'html', child_type: 2, url: 'assets/knowledge/2.Intro to mindfulness/304.Meaningful connection - part one.html'},
      { id: 31, border_type: 3, title: 'Explorer for list Html',   parent_id: 21, type: 'html', child_type: 1, url: 'assets/knowledge/3.Mind and emotions/1.Your Mind/313.What is my mind.html'},
      { id: 32, border_type: 2, title: 'Explorer for list Html',   parent_id: 21, type: 'html', child_type: 2, url: 'assets/knowledge/3.Mind and emotions/2.Thoughts as thoughts/319.Associations - part two.html'},
      { id: 33, border_type: 1, title: 'Explorer for list Html',   parent_id: 21, type: 'html', child_type: 2, url: 'assets/knowledge/3.Mind and emotions/3.Feelings as feelings/325.Normal human emotions.html'},
      { id: 34, border_type: 1, title: 'Expriences for list Html', parent_id: 8, type: 'html', child_type: 3, url: 'assets/experience/202.Mindful-Check-In-9mins.html'},
      { id: 35, border_type: 2, title: 'Expriences for list Html', parent_id: 8, type: 'html', child_type: 2, url: 'assets/experience/203.Mindfulness-of-the-Breath-10mins.html'},
      { id: 36, border_type: 1, title: 'Read list Html', parent_id: 22, type: 'html', child_type: 1, url: 'assets/more/503.Privacy Policy and Terms & Conditions.html'},
      { id: 37, border_type: 2, title: 'Read list Html', parent_id: 22, type: 'html', child_type: 2, url: 'assets/more/502.Tap me!.html'},
      { id: 38, border_type: 3, title: 'Read list Html', parent_id: 19, type: 'list', child_type: 3, url: ''},
      { id: 39, border_type: 2, title: 'Read list Html', parent_id: 19, type: 'html', child_type: 1, url: 'assets/more/504.Thank you.html'},
      { id: 40, border_type: 1, title: 'Read list Html', parent_id: 38, type: 'html', child_type: 2, url: 'assets/more/501.Getting-to-the-heart-of-it-video.html'},
      { id: 41, border_type: 2, title: 'Read list Html', parent_id: 38, type: 'html', child_type: 3, url: 'assets/more/504.Thank you.html'},
      { id: 42, border_type: 3, title: 'Read list Html', parent_id: 18, type: 'html', child_type: 2, url: 'assets/welcome/100.Introduction.html'},
      { id: 43, border_type: 1, title: 'Read list Html', parent_id: 18, type: 'html', child_type: 1, url: 'assets/welcome/101.How to use this app.html'}
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
