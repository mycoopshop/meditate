import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage }       from '../menu/menu';

@Component({
  templateUrl: 'build/pages/setting/setting.html',
})
export class SettingPage {

  constructor(private nav: NavController) {

  }

  sendItem() {
    console.log('demo function calling');
  }

  goBack() {
    this.nav.insert(0, MenuPage,{},{direction: 'back', duration: 610});
  }

}
