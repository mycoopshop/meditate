import { Alert, NavController, NavParams, Platform, SqlStorage, Storage} from 'ionic-angular';
import { Component }    from '@angular/core';
import {ListPage}       from '../list/list';

// import * as VIDEO from './../../www/assets/VideoStore/main.js';
// import { video_url } from '../../../www/assets/VideoStore/main';
// <script src="/../../../www/assets/VideoStore/main.js"></script>
// import '../../../www/assets/VideoStore/main.js';
@Component({
  templateUrl: 'build/pages/pop-up/pop-up.html',
})

export class PopUpPage {
    // value: any;
    parentId: any;
    private storage: Storage;
    main:any;
    public videoList: Array<Object>;
    static get parameters() {
      return [[NavController]];
    }
    
    public constructor(private nav: NavController, public platform: Platform, navParams: NavParams) {
      this.nav = nav;
      this.storage = new Storage(SqlStorage);
      this.storage.query("CREATE TABLE IF NOT EXISTS videodb (id INTEGER PRIMARY KEY AUTOINCREMENT, trackname TEXT, trackUrl TEXT)");
      this.videoList = [];
      this.parentId = 3;
      // this.value = document.querySelector('video');
    }

    showAlert() {
      let alert = Alert.create({
        title: 'Help Window!',
        subTitle: 'This is just a dummy help windows for videodb and audio list.',
        buttons: ['X']
      });
      this.nav.present(alert);
    }

    public onPageLoaded() {
      this.refresh();
    }

    public add(trackname,trackUrl) {
      // console.log('value====== We have======'+value());
        
        this.storage.query("INSERT INTO videodb (trackname, trackUrl) VALUES (?, ?)", ['trackname', 'trackUrl']).then((data) => {
            this.videoList.push({
                "trackname": "trackname",
                "trackUrl": "trackUrl"
            });
        }, (error) => {
            console.log(error);
        });
    }
 
    public refresh() {
        this.storage.query("SELECT * FROM videodb").then((data) => {
            if(data.res.rows.length > 0) {
                this.videoList = [];
                for(let i = 0; i < data.res.rows.length; i++) {
                    this.videoList.push({
                        "id": data.res.rows.item(i).id,
                        "trackname": data.res.rows.item(i).trackname,
                        "trackUrl": data.res.rows.item(i).trackUrl,
                    });
                }
            }
        }, (error) => {
            console.log(error);
      });
    }

    private deleteItem(item) {
      // console.log(item);
      this.storage.query("DELETE FROM videodb WHERE  id = "+item),(data)=>{
        console.log("deleted",item);
      },(error) =>{
        console.log("error deleted",error.err);
      }; 
    }

    removeItem(video){
    for( let i =0 ; i < this.videoList.length; i++) {
      if(this.videoList[i] == video){
        this.deleteItem(video.id);
        this.videoList.splice(i, 1);
      }
    }
  }

  goBack() {
    if(this.parentId != null)
      {
        this.nav.insert(0, ListPage, {
          menuId: this.parentId
        },{direction: 'back'});
      }
    else
      {
        this.nav.pop();
      }
  }

}

