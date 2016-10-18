import {DomSanitizationService} from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import {GetPageService} from "./get_page.service";
import { Http } from '@angular/http';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';


@Component({
  templateUrl: 'build/pages/view/view.html',
  providers: [GetPageService]
})

export class ViewPage {

  //url: any;
  page: any;
  @ViewChild('mySlider') slider: Slides;

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

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    autoplay:1000,
    autoplayDisableOnInteraction: false,
    direction:"horizontal",
    speed:1600,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev" 
  };

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    this.slider.slideTo(currentIndex, 500);
    //console.log("Current index is", currentIndex);
  } 
}
