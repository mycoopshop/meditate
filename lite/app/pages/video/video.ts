import { Component } 		from '@angular/core';
import { NavController, NavParams } 	from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/video/video.html',
})

export class VideoPage {
  listMenuId: number;
  listMenuPId: number;
  constructor(private nav: NavController, public navParams: NavParams) {
  	this.listMenuId = navParams.get('listMenuId');
  	this.listMenuPId = navParams.get('listMenuPId');
  }
}
