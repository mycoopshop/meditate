import { Component } from '@angular/core';
import { Alert, NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/pop-up/pop-up.html',
})

export class PopUpPage {
    static get parameters() {
      return [[NavController]];
    }
    constructor(private nav: NavController) {
      this.nav = nav;
    }

    showAlert() {
      let alert = Alert.create({
        title: 'Help Window!',
        subTitle: 'Demo is here for you and your soul. We are intended to stablish your connection to All Mighty.',
        buttons: ['X']
      });
      this.nav.present(alert);
    }
}

