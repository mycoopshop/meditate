import { Component } from '@angular/core';
import { Alert, NavController, NavParams, Platform, SqlStorage, Storage} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/pop-up/pop-up.html',
})

export class PopUpPage {

    private storage: Storage;
    public personList: Array<Object>;
    static get parameters() {
      return [[NavController]];
    }
    public constructor(private nav: NavController, public platform: Platform) {
      this.nav = nav;
        this.storage = new Storage(SqlStorage);
        this.storage.query("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)");
        this.personList = [];
    }

    showAlert() {
      let alert = Alert.create({
        title: 'Help Window!',
        subTitle: 'Demo is here for you and your soul. We are intended to stablish your connection to All Mighty.',
        buttons: ['Cancle']
      });
      this.nav.present(alert);
    }

    public onPageLoaded() {
        this.refresh();
    }

    public add() {
        this.storage.query("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Mindfulness video 05 ", "Mindfull."]).then((data) => {
            this.personList.push({
                "firstname": "Mindfulness video 05 ",
                "lastname": "Mindfull."
            });
        }, (error) => {
            console.log(error);
        });
    }

    public refresh() {
        this.storage.query("SELECT * FROM people").then((data) => {
            if(data.res.rows.length > 0) {
                this.personList = [];
                for(let i = 0; i < data.res.rows.length; i++) {
                    this.personList.push({
                        "id": data.res.rows.item(i).id,
                        "firstname": data.res.rows.item(i).firstname,
                        "lastname": data.res.rows.item(i).lastname,
                    });
                }
            }
        }, (error) => {
            console.log(error);
        });
    }
}
