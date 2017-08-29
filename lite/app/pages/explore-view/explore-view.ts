import {SafeResourceUrl, DomSanitizationService}      from '@angular/platform-browser';
import {NavController, NavParams, Slides, Content}    from 'ionic-angular';
import {Component, ViewChild}     from '@angular/core';
import {ExploreMenuListPage}      from '../explore-menu-list/explore-menu-list';
import {MenuPage}                 from '../menu/menu';
import {Http}                     from '@angular/http';

@Component({
  templateUrl: 'build/pages/explore-view/explore-view.html',
})

export class ExploreViewPage {

  parentId: any;
  page: any;
  iframe_height: any;
  exportMenuListTitle: string;

  @ViewChild('mySlider') slider: Slides;
  @ViewChild(Content) content: Content;
  
  constructor( public sanitizer: DomSanitizationService, public nav: NavController, navParams: NavParams ) {
    
    let url = navParams.get('url');
    this.page = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.parentId = navParams.get('parent_id');
    this.exportMenuListTitle = navParams.get('exploreMenuListTitle');
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
        this.nav.insert(1,ExploreMenuListPage, {
          expMenuId: this.parentId,
          breadcrumbsCollection: this.exportMenuListTitle
        },{direction: 'back'});
      }
    else {
      this.nav.pop();
    }
  }

  goToHome() {
    this.nav.insert(0, MenuPage,{},{direction: 'back', duration: 610});
  }
  
}
