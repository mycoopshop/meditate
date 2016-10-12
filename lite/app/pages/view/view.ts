import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/view/view.html',
})
export class ViewPage {

	url: any;

  constructor(private nav: NavController, navParams: NavParams) {
    this.url= navParams.get('url'); 
  }

}
