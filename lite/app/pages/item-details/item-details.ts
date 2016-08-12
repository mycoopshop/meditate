import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  selectedMenu: any;
  subMenus: Array<{id: number, title: string, parent_id: number, type: string, child_type: number, url: string}>;
  childSubMenus: Array<{submenu_id: number, id: number, type: string, title: string}>;

  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.selectedMenu = navParams.get('item');

    this.subMenus = [
      { id: 1,  title: 'Challenges',      parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 2,  title: 'Begin now',       parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 3,  title: 'Challenges',      parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 4,  title: 'Challenges',      parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 5,  title: 'Challenges',      parent_id: 0, type: 'menu', child_type: 1, url: ''},
      { id: 6,  title: 'First Sub Menu',  parent_id: 3, type: 'html', child_type: 1, url: 'dayChallenge.html'},
      { id: 7,  title: 'First Sub menu',  parent_id: 1, type: 'menu', child_type: 1, url: ''},
      { id: 8,  title: 'Second Sub menu', parent_id: 3, type: 'html', child_type: 2, url: 'dayChallenge.html'},
      { id: 9,  title: 'First Sub menu',  parent_id: 2, type: 'list', child_type: 1, url: ''},
      { id: 10, title: 'Second Sub menu', parent_id: 1, type: 'menu', child_type: 2, url: ''},
      { id: 11, title: 'First Sub Menu',  parent_id: 3, type: 'html', child_type: 1, url: 'dayChallenge.html'},
      { id: 12, title: 'Third Sub menu',  parent_id: 1, type: 'menu', child_type: 3, url: ''},
      { id: 13, title: 'Second Sub menu', parent_id: 3, type: 'html', child_type: 2, url: 'dayChallenge.html'},
      { id: 14, title: 'First Sub menu',  parent_id: 2, type: 'list', child_type: 1, url: ''},
      { id: 15, title: 'Third Sub menu',  parent_id: 1, type: 'menu', child_type: 3, url: ''},
      { id: 16, title: 'Fourth Sub Menu', parent_id: 3, type: 'html', child_type: 4, url: 'dayChallenge.html'},
      { id: 17, title: 'Fourth Sub menu', parent_id: 1, type: 'menu', child_type: 4, url: ''},
      { id: 18, title: 'Third Sub menu',  parent_id: 3, type: 'html', child_type: 3, url: 'dayChallenge.html'},
      { id: 19, title: 'First Sub menu',  parent_id: 1, type: 'menu', child_type: 1, url: ''},
      { id: 20, title: 'Fourth Sub menu', parent_id: 1, type: 'menu', child_type: 4, url: ''},
      { id: 21, title: 'Third Sub Menu',  parent_id: 2, type: 'list', child_type: 3, url: ''},
      { id: 22, title: 'Third Sub menu',  parent_id: 1, type: 'menu', child_type: 3, url: ''},
      { id: 23, title: 'Second Sub menu', parent_id: 3, type: 'html', child_type: 2, url: 'dayChallenge.html'},
      { id: 24, title: 'First Sub menu',  parent_id: 1, type: 'menu', child_type: 1, url: ''},
      { id: 25, title: 'demo First menu', parent_id: 7, type: 'list', child_type: 1, url: ''},
      { id: 26, title: 'demo sesfds menu', parent_id: 10, type: 'list', child_type: 1, url: ''}
    ];

  
  }
}
