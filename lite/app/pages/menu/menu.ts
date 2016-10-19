import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';

@Component({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {

  constructor(private nav: NavController) {

  }
  itemTappedOne(event, menuId) {
    this.nav.push(ListPage, {
      menuId: 1
    });
  }

  itemTappedTwo(event, menuId) {
    this.nav.push(ListPage, {
      menuId: 2
    });
  }

  itemTappedThree(event, menuId) {
    this.nav.push(ListPage, {
      menuId: 3
    });
  }

  itemTappedFour(event, menuId) {
    this.nav.push(ListPage, {
      menuId: 4
    });
  }
}
