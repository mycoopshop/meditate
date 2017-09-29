import { DomSanitizer }      from '@angular/platform-browser';
import { NavController, NavParams, Slides, Content }  from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { ListPage }               from '../list/list';
import { MenuPage }               from '../menu/menu';

@Component({
  templateUrl: 'view.html',
})

export class ViewPage {

  //url: any;
  parentId: any;
  page: any;
  direction: string;
  Scroll_height: number;
  iframe_height: any;
  breadcrumbsPrevious: any;
  @ViewChild('mySlider') slider: Slides;
  @ViewChild(Content) content: Content;

  constructor( public sanitizer: DomSanitizer, public nav: NavController, navParams: NavParams ) {
    let url = navParams.get('url');
    this.page = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.parentId = navParams.get('parent_id');
    this.breadcrumbsPrevious = navParams.get('breadcrumbs');
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
    // console.log(this.parentId);
    if(this.parentId != null)
      {
        this.nav.push(ListPage, {
          menuId: this.parentId,
          direction: 'backWard',
          breadcrumbsView: this.breadcrumbsPrevious
        },{direction: 'back'});
      }
    else
      {
        this.nav.pop();
      }
  }

  goToHome() {
    this.nav.push( MenuPage,{},{direction: 'back', duration: 610});
  }

}
