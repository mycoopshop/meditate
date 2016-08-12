import {Component} from '@angular/core';
import {ListPage} from '../list/list';


@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  
  listPage = ListPage;
  constructor() {

  }
}
