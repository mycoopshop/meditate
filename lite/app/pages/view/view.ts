import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
//import {GetPageService} from "./get_page.service";
import { Http } from '@angular/http';
import { Slides } from 'ionic-angular';
//import { ViewChild } from '@angular/core';


@Component({
  templateUrl: 'build/pages/view/view.html',
})

export class ViewPage {

  //url: any;
  page: any;
  @ViewChild('mySlider') slider: Slides;

  constructor( public sanitizer: DomSanitizationService, public nav: NavController, navParams: NavParams ) {
    let url = navParams.get('url');
    this.page = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    // this.url = navParams.get('url'); 
    // console.log(this.url);
  }

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    autoplay:3000,
    autoplayDisableOnInteraction: false,
    direction:"horizontal",
    speed:2500,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev" 
  };

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    this.slider.slideTo(currentIndex, 500);
    //console.log("Current index is", currentIndex);
  } 
}
