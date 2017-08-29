import { Component }      from '@angular/core';
import { NavController }  from 'ionic-angular';
import {ListPage}         from '../list/list';

@Component({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {

  constructor(private nav: NavController) {

  }
  itemTappedOne(event, menuId) {
    this.nav.push(ListPage, {
      menuId: 1,
      title: 'Challenges'
    });
  }

  itemTappedTwo(event, menuId) {
    this.nav.push(ListPage, {
      menuId: 2,
      title: 'Explore'
    });
  }

  itemTappedThree(event, menuId) {
    this.nav.push(ListPage, {
      menuId: 3,
      title: 'Meditate Now'
    });
  }

  itemTappedFour(event, menuId) {
    this.nav.push(ListPage, {
      menuId: 4,
      title: 'Read'
    });
  }
}
