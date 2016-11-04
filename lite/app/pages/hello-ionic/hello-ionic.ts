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
      {id: 1,  author: "-Osho",          title: "Relax, let go. But remember only one thing: You are a witness."},
      {id: 2,  author: "-Unknown",       title: "When you own your breath, nobody can steal your peace."},
      {id: 3,  author: "-T.N. Hanh",     title: "Our one true home is in the present moment."},
      {id: 4,  author: "-J. Goethe",     title: "Nothing is worth more than this day."},
      {id: 5,  author: "-G. Harrison",   title: "It's being here now that's important. There's no past and there's no future. Time is a very misleading thing. All there is ever, is the now."},
      {id: 6,  author: "-J. Rumi",       title: "Out beyond ideas of wrongdoing and right doing, there is a field. I'll meet you there. "},
      {id: 7,  author: "-E. Tolle",      title: "All the things that truly matter – beauty, love, creativity, joy, inner peace – arise from beyond the mind."},
      {id: 8,  author: "-E. Tolle",      title: "What a liberation to realise that the  voice in my head is not who I am. Who am I then? The one who sees that."},
      {id: 9,  author: "-B. Katie ",     title: "A thought is harmless unless we believe it. It's not our thoughts, but our attachment to our thoughts, that causes suffering."},
      {id: 10, author: "-J. Kabat-Zinn", title: "Our thoughts are just thoughts... In being seen and known, they cannot but self-liberate, and we are, in that moment, liberated from them."},
      {id: 11, author: "-B. Katie",      title: "In my experience, we don't make thoughts appear, they just appear. One day, I noticed that their appearance just wasn't personal."},
      {id: 12, author: "-C. Jung",       title: "What you resist persists."},
      {id: 13, author: "-M. Montaigne",  title: "My life has been full of terrible misfortunes, most of which have never happened."},
      {id: 14, author: "-B. Katie",      title: "When you argue with reality, you lose... 100% of the time... Arguing with reality is like teaching a cat to bark."},
      {id: 15, author: "-D. Ford",       title: "What we cannot be with will not let us be."},
      {id: 16, author: "-M. Williamson", title: "Change is in the air, as old patterns fall away and new energies are emerging."},
      {id: 17, author: "-N.D. Walsch ",  title: "If I do not go within, I go without."},
      {id: 18, author: "-T.N. Hanh",     title: "I think therefore I am not here."},
      {id: 19, author: "-H. Ford",       title: "If you always do what you've always done, you'll always get what you've always got."},
      {id: 20, author: "-S. Hayes",      title: "Get out of your mind and into your life."},
      {id: 21, author: "-C. Hassad",     title: "If we give our consciousness to a thought, it is like plugging it into that power source."},
      {id: 22, author: "-D. Chopra",     title: "It's difficult enough to change yourself. Release the need to change anyone else."},
      {id: 23, author: "-J. Kabat-Zinn", title: "Staying with the breath no matter what, ultimately leads to deep experiences of calmness and awareness."},
      {id: 24, author: "-N. Branden",    title: "The first step to change is awareness. The second step is acceptance."},
      {id: 25, author: "-D. Eldon",      title: "The journey is the destination."},
      {id: 26, author: "-B. Katie",      title: "The judgments you believe just created your world."},
      {id: 27, author: "-P.Chödrön",     title: "The more times we witness our emotional reactions and understand how they work, the easier it is to refrain."},
      {id: 28, author: "-E. Tolle",      title: "The world can only change from within."},
      {id: 29, author: "-W. Shakespeare",title: "There is nothing either good or bad, but thinking makes it so."},
      {id: 30, author: "-T. Robson",     title: "When awareness is brought to an emotion, power is brought to your life."},
      {id: 31, author: "-Byron Katie",   title: "When you argue with reality, you lose... 100% of the time... Arguing with reality is like teaching a cat to bark."},
      {id: 32, author: "-Osho",          title: "When you think, you can't see reality as it is, because your thinking becomes a barrier. Your thinking colours reality."},
      {id: 33, author: "-S. Boorstein",  title: "Fear doesn't frighten me as much as it used to. I know it's from clinging, and I know it will pass."},
      {id: 34, author: "-S. MacLaine",   title: "Fear makes strangers out of people who would be friends."},
      {id: 35, author: "-W. Erhar",      title: "Resistance causes persistence."},
    ];
  	
  }

  itemTappedOne(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 1
    });
  }

  itemTappedTwo(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 2
    });
  }

  itemTappedThree(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 3
    });
  }

  itemTappedFour(event, menuId) {
    this.navController.push(ListPage, {
      menuId: 4
    });
  }

  navigate() {
    this.navController.push(MenuPage);
  }

  // quotes slider
  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    effect: 'fade',
    fade: {crossFade:true},
    autoplay:2700,
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

  // home page slider
  myMainSlideOptions = {
    initialSlide: 0,
    loop: false,
    autoplay: 22100,
    direction:"horizontal",
    speed: 5000,
    allowSwipeToPrev: false,
    allowSwipeToNext: true,
    autoplayStopOnLast: true
  };

}
