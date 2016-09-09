import {Component} from '@angular/core';
import {ListPage} from '../list/list';
import {PopUpPage} from '../pop-up/pop-up';


@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  
  listPage = ListPage;
  popUpPage = PopUpPage;
  constructor() {

  }
}
