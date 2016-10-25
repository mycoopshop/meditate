import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import {ListPage}               from '../list/list';
import { Http }                 from '@angular/http';

@Component({
  templateUrl: 'build/pages/view/view.html',
})

export class ViewPage {

  //url: any;
  parentId: any;
  page: any;
  @ViewChild('mySlider') slider: Slides;

  constructor( public sanitizer: DomSanitizationService, public nav: NavController, navParams: NavParams ) {
    let url = navParams.get('url');
    this.page = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.parentId = navParams.get('parent_id');
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
  } 

  goBack() {
    this.nav.push(ListPage, {
      menuId: this.parentId
    });
  }

}
