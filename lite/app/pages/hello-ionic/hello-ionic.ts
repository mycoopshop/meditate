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
  	this.navController.push(ListPage, {
    	param1: 'John', param2: 'Johnson'
	});
  }
}
