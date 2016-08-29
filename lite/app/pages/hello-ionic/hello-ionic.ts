import {Component} from '@angular/core';
import {ListPage} from '../list/list';
import {MenuPage} from '../menu/menu';


@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  
  listPage = ListPage;
  menuPage = MenuPage;
  constructor() {

  }
}
