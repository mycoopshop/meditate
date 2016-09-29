import {Component} from '@angular/core';
import {NavController, NavParams, Content} from 'ionic-angular';
import {ListPage} from '../list/list';
import {PopUpPage} from '../pop-up/pop-up';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  listPage = ListPage;
  popUpPage = PopUpPage;
  constructor(private navController: NavController) {
  	
  }

  itemTappedOne(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 1
    });
  }

  itemTappedTwo(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 2
    });
  }

  itemTappedThree(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 3
    });
  }

  itemTappedFour(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 4
    });
  }
   Swiper(), {
    speed: 400,
    spaceBetween: 100  
  }
}
