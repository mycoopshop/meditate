import {DomSanitizationService} from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import {GetPageService} from "./get_page.service";
import { Http } from '@angular/http';


@Component({
  templateUrl: 'build/pages/view/view.html',
  providers: [GetPageService]
})

export class ViewPage {

  //url: any;
  page: any;

  constructor(private _gps: GetPageService, private sanitizer: DomSanitizationService, private nav: NavController, navParams: NavParams ) {
    
    // this.url = navParams.get('url'); 
    // console.log(this.url);
  }

  ngOnInit() {
    this._gps.getPage().subscribe(
        (data)=>{
          this.page = this.sanitizer.bypassSecurityTrustResourceUrl(data);
          //console.log(this.page);
        }
    )
  }
}
