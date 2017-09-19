// import { Alert, NavController, NavParams, Platform } from 'ionic-angular';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Component }      from '@angular/core';
// import { ListPage }       from '../list/list';
import { MenuPage }       from '../menu/menu';

@Component({
  templateUrl: 'media.html',
})

export class MediaPage {
    public videoCollection: any;
    public audioCollection: any;

    public constructor(private nav: NavController, public platform: Platform, navParams: NavParams) {
      this.nav = nav;

      this.videoCollection = [];
      this.audioCollection = [];
      this.storageData();
      // console.log("hey array ="+this.audioCollection[0]);
    }

    storageData() {
      // let vidUrl = localStorage.getItem('Video URL:');
      let vidTitle = localStorage.getItem('Video Title:');
      this.videoCollection.push(vidTitle);

      // let audiUrl = localStorage.getItem('Audio URL:');
      let audiTitle = localStorage.getItem('Audio Title:');
      this.audioCollection.push(audiTitle);
    }

    removeVideoRecord() {
      localStorage.removeItem('Video URL:');
      localStorage.removeItem('Video Title:');
      this.refreshMe()
    }

    removeAudioRecord() {
      localStorage.removeItem('Audio URL:');
      localStorage.removeItem('Audio Title:');
      this.refreshMe()
    }

    refreshMe() {
      this.nav.setRoot(MediaPage);
    }

    goBack() {
      this.nav.insert(0, MenuPage,{},{direction: 'back', duration: 610});
    }

}
