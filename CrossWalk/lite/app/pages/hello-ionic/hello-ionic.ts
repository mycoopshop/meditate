import {NavController, NavParams, Content} from 'ionic-angular';
import {Component, ViewChild}     from '@angular/core';
import {PopUpPage}    from '../pop-up/pop-up';
import {ListPage}     from '../list/list';
import {MenuPage}     from '../menu/menu';
import { Slides }     from 'ionic-angular';

interface Slide {
  id: number;
  title: string;
  author: string;
}

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {

  menuPage = MenuPage;
  listPage = ListPage;
  popUpPage = PopUpPage;
  @ViewChild('mySlider') slider: Slides;
  slides: Slide[];

  constructor(public navController: NavController) {

    this.slides = [
      {id: 1,  author: "- T.Brach",      title: "Mindfulness - the space between stimulus and response: that's where choice lies."},
      {id: 2,  author: "- E.Tolle",      title: "The human condition: lost in thought."},
      {id: 3,  author: "- R.Lowe",       title: "In the gap between your thoughts is your truth."},
      {id: 4,  author: "- B. Katie",     title: "When you argue with reality, you lose… 100% of the time…"},
      {id: 5,  author: "- A. Maslow",    title: "You will either move forwards into growth or backwards into safety."},
      {id: 6,  author: "- Unknown",      title: "When you own your breath, nobody can steal your peace."},
      {id: 7,  author: "- T.N. Hanh",    title: "Our one true home is in the present moment."},
      {id: 8,  author: "- J. Goethe",    title: "Nothing is worth more than this day."},
      {id: 9,  author: "- E. Tolle",     title: "The ‘voice inside your head’ is not who you are."},
      {id: 10, author: "- J. Kabat-Zinn",title: "Our thoughts are just thoughts…"},
      {id: 11, author: "-C. Jung",       title: "What you resist persists."},
      {id: 12, author: "- Osho ",        title: "Relax, let go. But remember only one thing: You are a witness."},
      {id: 13, author: "- B. Katie",     title: "Arguing with reality is like teaching a cat to bark."},
      {id: 14, author: "- D. Ford",      title: "What we cannot be with will not let us be."},
      {id: 15, author: "- N.D. Walsch",  title: "If I do not go within, I go without. "},
      {id: 16, author: "-T.N. Hanh",     title: "I think therefore I am not here."},
      {id: 17, author: "- S. Hayes ",    title: "Get out of your mind and into your life."},
      {id: 18, author: "- J. Kabat-Zinn",title: "Staying with the breath no matter what leads to deep calmness"},
      {id: 19, author: "-N. Branden",    title: "The first step to change is awareness."},
      {id: 20, author: "-D. Eldon",      title: "The journey is the destination."},
      {id: 21, author: "-B. Katie",      title: "The judgments you believe just created your world."},
      {id: 22, author: "-E. Tolle",      title: "The world can only change from within."},
      {id: 23, author: "-W. Shakespeare",title: "There is nothing either good or bad, but thinking makes it so."},
      {id: 24, author: "-Osho",          title: "Your thinking colours reality."},
      {id: 25, author: "- W. Erhar",     title: "Resistance causes persistence. "}
    ];

  }

  itemTappedOne(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 1,
      title: 'Challenges'
    });
  }

  itemTappedTwo(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 2,
      title: 'Explore'
    });
  }

  itemTappedThree(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 3,
      title: 'Meditate Now'
    });
  }

  itemTappedFour(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 4,
      title: 'Read'
    });
  }

  navigateSkip() {
    this.navController.push(MenuPage);
  }

  // quotes slider
  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    effect: 'fade',
    fade: {crossFade:true},
    autoplay:90,
    autoplayDisableOnInteraction: true,
    direction:"horizontal",
    speed:4000,
    nextButton: ".pause-me",
    prevButton: ".swiper-button-prev"
  };

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    this.slider.slideTo(currentIndex, 10);
  }

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.slides.length);
  }

  newSlide() {
    let newSlide = this.getRandomIndex();
    this.slider.slideTo(newSlide,500);
  }

  // home page slider
  myMainSlideOptions = {
    initialSlide: 0,
    loop: false,
    // effect: 'fade',
    // fade: {crossFade:true},
    autoplay: 5900,
    direction:"horizontal",
    speed: 5000,
    allowSwipeToPrev: false,
    allowSwipeToNext: true,
    autoplayStopOnLast: true
  };

}
