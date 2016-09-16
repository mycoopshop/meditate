import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Content} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

@Component({
  templateUrl: 'build/pages/list/list.html',
})

export class ListPage {
  selectedId: any;
  public flag;
  
  subMenus: Array<{id: number, border_type:number, title: string, contain: string, parent_id: number, type: string, child_type: number, url: string}>;
  @ViewChild(Content) content: Content;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    
    this.selectedId = navParams.get('menuId'); 

    this.flag = "0";
    this.subMenus = [
      { id: 5,  border_type: 1, title: '8 day challenge',         contain: 'none',  parent_id: 1,  type: 'html', child_type: 1, url: 'assets/challenge/The-8-Day-Challenge.html'},
      { id: 6,  border_type: 2, title: '8 day micro course',      contain: 'none',  parent_id: 1,  type: 'html', child_type: 2, url: 'assets/challenge/dayChallenge.html'},
      { id: 7,  border_type: 3, title: 'More',                    contain: 'none',  parent_id: 1,  type: 'html', child_type: 3, url: 'assets/challenge/The-8-Day-Challenge.html'},
      { id: 8,  border_type: 1, title: "I'm used to this",        contain: 'none',  parent_id: 2,  type: 'list', child_type: 1, url: ''},
      { id: 9,  border_type: 2, title: "Beginner",                contain: 'none',  parent_id: 2,  type: 'list', child_type: 1, url: ''},
      { id: 10, border_type: 3, title: "Let's go deeper",         contain: 'none',  parent_id: 2,  type: 'list', child_type: 3, url: ''},
      { id: 11, border_type: 1, title: 'Meditate Sub Head',       contain: 'none',  parent_id: 3,  type: 'html', child_type: 1, url: 'assets/experience/201-How-to-meditate.html'},
      { id: 12, border_type: 2, title: 'Meditate Sub Head',       contain: 'none',  parent_id: 3,  type: 'html', child_type: 2, url: 'assets/more/505.Getting-to-the-heart-of-it.html'},
      { id: 13, border_type: 1, title: 'Brief',                   contain: 'video', parent_id: 4,  type: 'menu', child_type: 1, url: ''},
      { id: 14, border_type: 2, title: 'In Depth',                contain: 'video', parent_id: 4,  type: 'menu', child_type: 3, url: ''},
      { id: 15, border_type: 1, title: 'Mindfulness Meditations', contain: 'none',  parent_id: 8,  type: 'html', child_type: 1, url: 'assets/knowledge/1.Intro-to-the-book/300.Introduction-to-this-book.html'},
      { id: 16, border_type: 2, title: 'Experientail Exercises',  contain: 'none',  parent_id: 8,  type: 'html', child_type: 2, url: 'assets/experience/202.Mindful-Check-In-9mins.html'},
      { id: 17, border_type: 3, title: 'Tips And Tools',          contain: 'none',  parent_id: 8,  type: 'html', child_type: 3, url: 'assets/more/501.Getting-to-the-heart-of-it-video.html'},
      { id: 18, border_type: 1, title: 'Mindfulness Meditations', contain: 'none',  parent_id: 9,  type: 'html', child_type: 1, url: 'assets/knowledge/1.Intro-to-the-book/300.Introduction-to-this-book.html'},
      { id: 19, border_type: 2, title: 'Experientail Exercises',  contain: 'none',  parent_id: 9,  type: 'html', child_type: 2, url: 'assets/experience/202.Mindful-Check-In-9mins.html'},
      { id: 20, border_type: 3, title: 'Tips And Tools',          contain: 'none',  parent_id: 9,  type: 'html', child_type: 3, url: 'assets/more/501.Getting-to-the-heart-of-it-video.html'},
      { id: 21, border_type: 1, title: 'Mindfulness Meditations', contain: 'none',  parent_id: 10, type: 'html', child_type: 1, url: 'assets/knowledge/1.Intro-to-the-book/300.Introduction-to-this-book.html'},
      { id: 22, border_type: 2, title: 'Experientail Exercises',  contain: 'none',  parent_id: 10, type: 'html', child_type: 2, url: 'assets/experience/202.Mindful-Check-In-9mins.html'},
      { id: 23, border_type: 3, title: 'Tips And Tools',          contain: 'none',  parent_id: 10, type: 'html', child_type: 3, url: 'assets/more/501.Getting-to-the-heart-of-it-video.html'},
      { id: 24, border_type: 1, title: 'Sub Heads',               contain: 'none',  parent_id: 13, type: 'html', child_type: 3, url: 'assets/knowledge/3.Mind-and-emotions/3.Feelings-as-feelings/325.Normal-human-emotions.html'},
      { id: 25, border_type: 2, title: 'Sub Heads',               contain: 'none',  parent_id: 14, type: 'html', child_type: 3, url: 'assets/welcome/100.Introduction.html'},
    ];
  }

  sayHello(str) {
    this.selectedId=str;
  };
  
  getValue() {
    return this.selectedId;
  };
  
  scrollTo() {
    this.content.scrollTo(0, 500, 200);
  }

}
