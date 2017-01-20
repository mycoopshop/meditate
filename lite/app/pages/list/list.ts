import {NavController, NavParams, Content} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {VideoPage} from '../video/video';
import {ViewPage}  from '../view/view';
import {MenuPage}  from '../menu/menu';

@Component({
  templateUrl: 'build/pages/list/list.html',
})

export class ListPage {
  selectedId: any;
  selectedTitle: string;
  public flag;
  public scrollNow;
  parentId: any;
  parentTitle :string;
  rootPage: any = ListPage;
  
  
  subMenus: Array<{id: number, border_type:number, title: string, contain: string, parent_id: number, type: string, stage:string, child_type: number, url: string}>;
  @ViewChild(Content) content: Content;
  
  constructor(private navCtrl: NavController, navParams: NavParams) {
    
    this.selectedId = navParams.get('menuId'); 
    this.selectedTitle = navParams.get('title'); 
    
    this.flag = "0";
    this.scrollNow = "2500";

    this.subMenus = [
      { id: 1,   border_type: 0, parent_id: 0,   title: 'Challenges',                                 contain: 'none',   type: 'none', stage: 'empty', child_type: 1, url: ''},
      { id: 2,   border_type: 0, parent_id: 0,   title: 'Explore',                                    contain: 'none',   type: 'none', stage: 'empty', child_type: 1, url: ''},
      { id: 3,   border_type: 0, parent_id: 0,   title: 'Meditate Now',                               contain: 'none',   type: 'none', stage: 'empty', child_type: 1, url: ''},
      { id: 4,   border_type: 0, parent_id: 0,   title: 'Read',                                       contain: 'none',   type: 'none', stage: 'empty', child_type: 1, url: ''},
      { id: 5,   border_type: 1, parent_id: 1,   title: '8 day challenge',                            contain: 'none',   type: 'menu', stage: 'final', child_type: 1, url: ''},
      { id: 6,   border_type: 2, parent_id: 1,   title: '8 day micro course',                         contain: 'none',   type: 'menu', stage: 'final', child_type: 2, url: ''},
      { id: 7,   border_type: 3, parent_id: 0,   title: 'More',                                       contain: 'none',   type: 'list', stage: 'empty', child_type: 3, url: ''},
      { id: 8,   border_type: 1, parent_id: 2,   title: "I like them short",                          contain: 'none',   type: 'menu', stage: 'empty', child_type: 1, url: ''},
      { id: 9,   border_type: 2, parent_id: 2,   title: "I'm used to this",                           contain: 'none',   type: 'menu', stage: 'empty', child_type: 1, url: ''},
      { id: 10,  border_type: 3, parent_id: 2,   title: "Let's go deeper",                            contain: 'none',   type: 'menu', stage: 'empty', child_type: 3, url: ''},
      { id: 11,  border_type: 1, parent_id: 3,   title: 'An Imaginary Line',                          contain: 'video',  type: 'html', stage: 'empty', child_type: 1, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 12,  border_type: 2, parent_id: 3,   title: 'An Imaginary Balloon',                       contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 13,  border_type: 3, parent_id: 3,   title: 'Choose It - Use It',                         contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 14,  border_type: 1, parent_id: 3,   title: 'Getting With The Flow',                      contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 15,  border_type: 2, parent_id: 3,   title: 'Awareness trainin with a bell',              contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 16,  border_type: 3, parent_id: 3,   title: 'The Word outside',                           contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 17,  border_type: 1, parent_id: 3,   title: 'Being in the body',                          contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 18,  border_type: 2, parent_id: 3,   title: 'Mindful check In',                           contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 19,  border_type: 3, parent_id: 3,   title: 'Choose It - Use It',                         contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 20,  border_type: 1, parent_id: 3,   title: 'The Breath and Beyond',                      contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 21,  border_type: 2, parent_id: 3,   title: 'Body-Mind-World',                            contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 22,  border_type: 3, parent_id: 3,   title: 'Out and about',                              contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 23,  border_type: 1, parent_id: 3,   title: 'With the World',                             contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 24,  border_type: 2, parent_id: 3,   title: 'Letting go of controll',                     contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 25,  border_type: 3, parent_id: 3,   title: 'The Body and Beyond',                        contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 26,  border_type: 1, parent_id: 3,   title: 'The four phase practice',                    contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 27,  border_type: 2, parent_id: 3,   title: 'Nothing Matters',                            contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 28,  border_type: 3, parent_id: 3,   title: 'Releasing Resistance',                       contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 29,  border_type: 1, parent_id: 4,   title: 'Intro to the book',                          contain: 'none',   type: 'html', stage: 'final', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 30,  border_type: 2, parent_id: 4,   title: 'Introduction to mindfulness',                contain: 'none',   type: 'html', stage: 'final', child_type: 3, url: 'assets/read/ch_2_introduction_to_mindfulness/start.html'},
      { id: 31,  border_type: 3, parent_id: 4,   title: 'Mind and emotions',                          contain: 'none',   type: 'html', stage: 'empty', child_type: 4, url: ''},
      { id: 32,  border_type: 1, parent_id: 4,   title: 'Patterns of behaviour',                      contain: 'none',   type: 'html', stage: 'empty', child_type: 4, url: ''},
      { id: 33,  border_type: 2, parent_id: 4,   title: 'The art of allowing',                        contain: 'none',   type: 'html', stage: 'final', child_type: 3, url: 'assets/explore/i_like_them_short/tips_and_tools/labelling.html'},
      { id: 34,  border_type: 3, parent_id: 4,   title: 'Final words',                                contain: 'none',   type: 'html', stage: 'final', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/the_world_outside_eleven_mins.html'},
      { id: 35,  border_type: 1, parent_id: 8,   title: 'Guided Mindfulness',                         contain: 'none',   type: 'list', stage: 'final', child_type: 1, url: ''},
      { id: 36,  border_type: 2, parent_id: 8,   title: 'Experiential Exercises',                     contain: 'none',   type: 'list', stage: 'final', child_type: 2, url: ''},
      { id: 37,  border_type: 3, parent_id: 8,   title: 'Tips And Tools',                             contain: 'none',   type: 'list', stage: 'final', child_type: 3, url: ''},
      { id: 38,  border_type: 1, parent_id: 9,   title: 'Guided Mindfulness',                         contain: 'none',   type: 'list', stage: 'final', child_type: 1, url: ''},
      { id: 39,  border_type: 2, parent_id: 9,   title: 'Experiential Exercises',                     contain: 'none',   type: 'list', stage: 'final', child_type: 2, url: ''},
      { id: 40,  border_type: 3, parent_id: 9,   title: 'Tips And Tools',                             contain: 'none',   type: 'list', stage: 'final', child_type: 3, url: ''},
      { id: 41,  border_type: 1, parent_id: 10,  title: 'Guided Mindfulness',                         contain: 'none',   type: 'list', stage: 'final', child_type: 1, url: ''},
      { id: 42,  border_type: 2, parent_id: 10,  title: 'Experiential Exercises',                     contain: 'none',   type: 'list', stage: 'final', child_type: 2, url: ''},
      { id: 43,  border_type: 3, parent_id: 10,  title: 'Tips And Tools',                             contain: 'none',   type: 'list', stage: 'final', child_type: 3, url: ''}, 
      { id: 44,  border_type: 1, parent_id: 31,  title: 'Your Mind',                                  contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 45,  border_type: 2, parent_id: 31,  title: 'Thoughts-as-thoughts',                       contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 46,  border_type: 3, parent_id: 31,  title: 'Feelings-as-feelings',                       contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 47,  border_type: 1, parent_id: 32,  title: 'The little patterns',                        contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 48,  border_type: 2, parent_id: 32,  title: 'Inner resistance',                           contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 49,  border_type: 3, parent_id: 32,  title: 'Resistance traps',                           contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''}
    ];
    
    for(var m of this.subMenus){
      if(this.selectedId ==  m.id)
      {
        this.selectedTitle = m.title;
        // console.log('title from constructor='+this.selectedTitle);
      }
      else {
        this.parentTitle = ' ';
      }
    }

  }

  setValue(id, pId, title) {
    this.selectedId=id;
    this.parentId=pId;
    this.parentTitle=title;
  };
  
  getValue() {
    return this.selectedId;
  };
  
  scrollTo() {
    let dimensions = this.content.getContentDimensions();
    if (this.scrollNow >= (dimensions.scrollBottom-1920)) {
      this.scrollNow = -165;
    }
    this.scrollNow = this.scrollNow+320;
    this.content.scrollTo(0, this.scrollNow, 3000);
    // console.log(this.scrollNow);
  };

  viewPage(event, url, id) {
    this.navCtrl.push(ViewPage, {
      url: url,
      parent_id: id
    });
  }

  htmlList(event, Id, PId, PTitle, MenuPTitle) {
    this.navCtrl.push(VideoPage, {
      listMenuId: Id,
      listMenuPId: PId,
      mainMenuParentTitle: PTitle,
      listMenuParentTitle: MenuPTitle
    });
  }

  goBack() {
    //this.navCtrl.pop();
    console.log('selectedId= '+this.selectedId);
    if(this.selectedId == 1 || this.selectedId == 2 || this.selectedId == 3 || this.selectedId == 4)
    {
      // console.log("hello="+this.parentTitle)
      this.navCtrl.insert(0, MenuPage,{},{direction: 'back'});
    }
    else if(this.parentId != null) {
      this.navCtrl.insert(0, this.rootPage, {
        menuId: this.parentId
      },{direction: 'back'});
      // console.log("else if part selectedTitle= "+this.selectedTitle);
    }
    else {
      var pId;
        for(var menu of this.subMenus){
          if(this.selectedId ==  menu.id)
          {
            pId = menu.parent_id;
            break;
          }
        }
        this.navCtrl.insert(0, this.rootPage, {
        menuId: pId
      },{direction: 'back'});
    }
  }

  goToHome() {
    this.navCtrl.insert(0, MenuPage,{},{direction: 'back'});
  }
  
}
