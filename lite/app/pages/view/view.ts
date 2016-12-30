import {SafeResourceUrl, DomSanitizationService}      from '@angular/platform-browser';
import { NavController, NavParams, Slides, Content }  from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import {ListPage}               from '../list/list';
import {MenuPage}               from '../menu/menu';
import { Http }                 from '@angular/http';

@Component({
  templateUrl: 'build/pages/view/view.html',
})

export class ViewPage {

  //url: any;
  parentId: any;
  page: any;
  Scroll_height: number;
  iframe_height: any;
  @ViewChild('mySlider') slider: Slides;
  @ViewChild(Content) content: Content;
  constructor( public sanitizer: DomSanitizationService, public nav: NavController, navParams: NavParams ) {
    let url = navParams.get('url');
    this.page = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.parentId = navParams.get('parent_id');
    this.Scroll_height = 397;
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
    if(this.parentId != null)
    {
      this.nav.push(ListPage, {
        menuId: this.parentId
      });
    }
    else
    {
      this.nav.pop();
    }
  }

  scrollTo() {
    let iFramelen = document.getElementById('iframeID');
    this.iframe_height = iFramelen.scrollHeight;
    this.iframe_height = (this.Scroll_height);
    //let off_height = iFramelen.clientHeight;
    this.Scroll_height = this.Scroll_height+this.Scroll_height;
    //console.log(this.Scroll_height);
    console.log(this.iframe_height);
  };

  goToHome() {
    this.nav.push(MenuPage);
  }
  
}
