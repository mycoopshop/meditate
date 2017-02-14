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
  
  
  subMenus: Array<{id: number, border_type:number, title: string, platform: string,  contain: string, parent_id: number, type: string, stage:string, child_type: number, url: string}>;
  @ViewChild(Content) content: Content;
  
  constructor(private navCtrl: NavController, navParams: NavParams) {
    
    this.selectedId = navParams.get('menuId'); 
    this.selectedTitle = navParams.get('title'); 
    
    this.flag = "0";
    this.scrollNow = "2500";

    this.subMenus = [
      { id: 1,   border_type: 0, parent_id: 0,   title: 'Challenges',                                platform: ' ',  contain: 'none',   type: 'none', stage: 'empty', child_type: 1, url: ''},
      { id: 2,   border_type: 0, parent_id: 0,   title: 'Explore',                                   platform: ' ',  contain: 'none',   type: 'none', stage: 'empty', child_type: 1, url: ''},
      { id: 3,   border_type: 0, parent_id: 0,   title: 'Meditate Now',                              platform: ' ',  contain: 'none',   type: 'none', stage: 'empty', child_type: 1, url: ''},
      { id: 4,   border_type: 0, parent_id: 0,   title: 'Read',                                      platform: ' ',  contain: 'none',   type: 'none', stage: 'empty', child_type: 1, url: ''},
      { id: 5,   border_type: 1, parent_id: 1,   title: '8 day challenge',                           platform: ' ',  contain: 'none',   type: 'menu', stage: 'final', child_type: 1, url: ''},
      { id: 6,   border_type: 2, parent_id: 1,   title: '8 day micro course',                        platform: ' ',  contain: 'none',   type: 'menu', stage: 'final', child_type: 2, url: ''},
      { id: 7,   border_type: 3, parent_id: 0,   title: 'More',                                      platform: ' ',  contain: 'none',   type: 'list', stage: 'empty', child_type: 3, url: ''},
      { id: 8,   border_type: 1, parent_id: 2,   title: "I like them short",                         platform: '1',  contain: 'none',   type: 'menu', stage: 'empty', child_type: 1, url: ''},
      { id: 9,   border_type: 2, parent_id: 2,   title: "I'm used to this",                          platform: '2',  contain: 'none',   type: 'menu', stage: 'empty', child_type: 1, url: ''},
      { id: 10,  border_type: 3, parent_id: 2,   title: "Let's go deeper",                           platform: '3',  contain: 'none',   type: 'menu', stage: 'empty', child_type: 3, url: ''},
      { id: 11,  border_type: 1, parent_id: 3,   title: 'An Imaginary Line',                         platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 1, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 12,  border_type: 2, parent_id: 3,   title: 'An Imaginary Balloon',                      platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 13,  border_type: 3, parent_id: 3,   title: 'Choose It - Use It',                        platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 14,  border_type: 1, parent_id: 3,   title: 'Getting With The Flow',                     platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 15,  border_type: 2, parent_id: 3,   title: 'Awareness trainin with a bell',             platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 16,  border_type: 3, parent_id: 3,   title: 'The Word outside',                          platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 17,  border_type: 1, parent_id: 3,   title: 'Being in the body',                         platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 18,  border_type: 2, parent_id: 3,   title: 'Mindful check In',                          platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 19,  border_type: 3, parent_id: 3,   title: 'Choose It - Use It',                        platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 20,  border_type: 1, parent_id: 3,   title: 'The Breath and Beyond',                     platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 21,  border_type: 2, parent_id: 3,   title: 'Body-Mind-World',                           platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 22,  border_type: 3, parent_id: 3,   title: 'Out and about',                             platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 23,  border_type: 1, parent_id: 3,   title: 'With the World',                            platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 24,  border_type: 2, parent_id: 3,   title: 'Letting go of controll',                    platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 25,  border_type: 3, parent_id: 3,   title: 'The Body and Beyond',                       platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 26,  border_type: 1, parent_id: 3,   title: 'The four phase practice',                   platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 27,  border_type: 2, parent_id: 3,   title: 'Nothing Matters',                           platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 28,  border_type: 3, parent_id: 3,   title: 'Releasing Resistance',                      platform: ' ',  contain: 'video',  type: 'html', stage: 'empty', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 29,  border_type: 1, parent_id: 4,   title: 'Intro to the book',                         platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 30,  border_type: 2, parent_id: 4,   title: 'Introduction to mindfulness',               platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 3, url: 'assets/read/ch_2_introduction_to_mindfulness/start.html'},
      { id: 31,  border_type: 3, parent_id: 4,   title: 'Mind and emotions',                         platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 4, url: ''},
      { id: 32,  border_type: 1, parent_id: 4,   title: 'Patterns of behaviour',                     platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 4, url: ''},
      { id: 33,  border_type: 2, parent_id: 4,   title: 'The art of allowing',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 3, url: 'assets/explore/i_like_them_short/tips_and_tools/labelling.html'},
      { id: 34,  border_type: 3, parent_id: 4,   title: 'Final words',                               platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/the_world_outside_eleven_mins.html'},
      { id: 35,  border_type: 1, parent_id: 8,   title: 'Guided Mindfulness',                        platform: '1',  contain: 'none',   type: 'list', stage: 'empty', child_type: 1, url: ''},
      { id: 36,  border_type: 2, parent_id: 8,   title: 'Experiential Exercises',                    platform: '2',  contain: 'none',   type: 'list', stage: 'empty', child_type: 2, url: ''},
      { id: 37,  border_type: 3, parent_id: 8,   title: 'Tips And Tools',                            platform: '3',  contain: 'none',   type: 'list', stage: 'empty', child_type: 3, url: ''},
      { id: 38,  border_type: 1, parent_id: 9,   title: 'Guided Mindfulness',                        platform: '1',  contain: 'none',   type: 'list', stage: 'empty', child_type: 1, url: ''},
      { id: 39,  border_type: 2, parent_id: 9,   title: 'Experiential Exercises',                    platform: '2',  contain: 'none',   type: 'list', stage: 'empty', child_type: 2, url: ''},
      { id: 40,  border_type: 3, parent_id: 9,   title: 'Tips And Tools',                            platform: '3',  contain: 'none',   type: 'list', stage: 'empty', child_type: 3, url: ''},
      { id: 41,  border_type: 1, parent_id: 10,  title: 'Guided Mindfulness',                        platform: '1',  contain: 'none',   type: 'list', stage: 'empty', child_type: 1, url: ''},
      { id: 42,  border_type: 2, parent_id: 10,  title: 'Experiential Exercises',                    platform: '2',  contain: 'none',   type: 'list', stage: 'empty', child_type: 2, url: ''},
      { id: 43,  border_type: 3, parent_id: 10,  title: 'Tips And Tools',                            platform: '3',  contain: 'none',   type: 'list', stage: 'empty', child_type: 3, url: ''}, 
      { id: 44,  border_type: 1, parent_id: 31,  title: 'Your Mind',                                 platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 45,  border_type: 2, parent_id: 31,  title: 'Thoughts-as-thoughts',                      platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 46,  border_type: 3, parent_id: 31,  title: 'Feelings-as-feelings',                      platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 47,  border_type: 1, parent_id: 32,  title: 'The little patterns',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 48,  border_type: 2, parent_id: 32,  title: 'Inner resistance',                          platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 49,  border_type: 3, parent_id: 32,  title: 'Resistance traps',                          platform: ' ',  contain: 'none',   type: 'html', stage: 'final', child_type: 5, url: ''},
      { id: 44,  border_type: 1, parent_id: 35,  title: 'Mindfulness is like a triangle',            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/mindfulness_is_like_a_triangle.html'},
      { id: 45,  border_type: 2, parent_id: 35,  title: 'An imaginary balloon (7 mins)',             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 46,  border_type: 3, parent_id: 35,  title: 'An imaginary line (8 mins)',                platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_line_eight_mins.html'},
      { id: 47,  border_type: 1, parent_id: 35,  title: 'Choose it - Use it (8 mins)',               platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/choose_it_use_it_eight_mins.html'},
      { id: 48,  border_type: 2, parent_id: 35,  title: 'Getting with the flow (7 mins)',            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/getting_with_the_flow_seven_mins.html'},
      { id: 49,  border_type: 3, parent_id: 35,  title: 'The world outside (11 mins)',               platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/the_world_outside_eleven_mins.html'},
      { id: 50,  border_type: 1, parent_id: 35,  title: 'Being in the body (11 mins)',               platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/being_in_the_body_eleven_mins.html'},
      { id: 51,  border_type: 1, parent_id: 36,  title: 'Stories on a Stream',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/experiential_exercises/stories_on_a_stream.html'},
      { id: 52,  border_type: 2, parent_id: 36,  title: 'Three minute nothing exercise',             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/experiential_exercises/three_minute_nothing_exercise.html'},
      { id: 53,  border_type: 3, parent_id: 36,  title: 'Be here now',                               platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/experiential_exercises/be_herep_now_and_maybe.html'},
      { id: 54,  border_type: 1, parent_id: 37,  title: 'One minute BMW',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/tips_and_tools/one_minute_bmw.html'},
      { id: 55,  border_type: 2, parent_id: 37,  title: 'Stepping back',                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html'},
      { id: 56,  border_type: 3, parent_id: 37,  title: 'Labelling',                                 platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/tips_and_tools/labelling.html'},
      { id: 57,  border_type: 1, parent_id: 37,  title: 'SOS 1',                                     platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_like_them_short/tips_and_tools/sos_one.html'},
      { id: 58,  border_type: 1, parent_id: 38,  title: 'Thoughts are like rain on a windscreen',    platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 59,  border_type: 2, parent_id: 38,  title: 'Mindful Check-In',                          platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 60,  border_type: 3, parent_id: 38,  title: 'Choose It - Use It',                        platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 61,  border_type: 1, parent_id: 38,  title: 'The Breath and Beyond',                     platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 62,  border_type: 2, parent_id: 38,  title: 'Body-Mind-World',                           platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 63,  border_type: 3, parent_id: 38,  title: 'Out and about',                             platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 64,  border_type: 1, parent_id: 38,  title: 'With the World',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 65,  border_type: 2, parent_id: 38,  title: 'Letting go of controll',                    platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 66,  border_type: 3, parent_id: 39,  title: 'Balloons in the sky',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 67,  border_type: 1, parent_id: 39,  title: 'Thoughts as things',                        platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 68,  border_type: 2, parent_id: 39,  title: 'The Observer Within',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 69,  border_type: 3, parent_id: 39,  title: 'The art of Allowing',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 70,  border_type: 1, parent_id: 40,  title: 'TWO Minute Stress Release',                 platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 71,  border_type: 2, parent_id: 40,  title: 'Three minute BMW',                          platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 72,  border_type: 3, parent_id: 40,  title: 'Anchoring',                                 platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 73,  border_type: 1, parent_id: 40,  title: 'SOS 2',                                     platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 74,  border_type: 1, parent_id: 41,  title: 'Feelings are like people at a guesthouse',  platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 75,  border_type: 2, parent_id: 41,  title: 'The Body and beyond',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 76,  border_type: 3, parent_id: 41,  title: 'The four phase practice',                   platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 77,  border_type: 1, parent_id: 41,  title: 'Nothing Matters',                           platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 78,  border_type: 2, parent_id: 41,  title: 'Choose It - Use It',                        platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 79,  border_type: 3, parent_id: 41,  title: 'Unguided',                                  platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 80,  border_type: 1, parent_id: 41,  title: 'Releasing Resistance',                      platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 81,  border_type: 2, parent_id: 42,  title: 'Thought Screen',                            platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 82,  border_type: 3, parent_id: 42,  title: 'The Observer Within',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 83,  border_type: 1, parent_id: 42,  title: 'The art of Allowing',                       platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 84,  border_type: 2, parent_id: 42,  title: 'Be Here now',                               platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 85,  border_type: 1, parent_id: 43,  title: 'Three minute breathing space',              platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 86,  border_type: 2, parent_id: 43,  title: 'Remember Who you are',                      platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 87,  border_type: 3, parent_id: 43,  title: 'SOS 3',                                     platform: ' ',  contain: 'none',   type: 'html', stage: 'empty', child_type: 3, url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'}
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
      this.navCtrl.insert(0, MenuPage,{},{direction: 'back', duration: 610});
    }
    else if(this.parentId != null) {
      this.navCtrl.insert(0, this.rootPage, {
        menuId: this.parentId
      },{direction: 'back', duration: 610});
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
      },{direction: 'back', duration: 610});
    }
  }

  goToHome() {
    this.navCtrl.insert(0, MenuPage,{},{direction: 'back', duration: 610});
  }
  
}
