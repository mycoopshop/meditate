import {Component, ViewChild} from '@angular/core';
import {ViewPage} from '../view/view';
import {NavController, NavParams, Content} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/list/list.html',
})

export class ListPage {
  selectedId: any;
  public flag;
  public scrollNow;
  
  subMenus: Array<{id: number, border_type:number, title: string, contain: string, parent_id: number, type: string, child_type: number, url: string}>;
  @ViewChild(Content) content: Content;
  
  constructor(private navCtrl: NavController, navParams: NavParams) {
    
    this.selectedId = navParams.get('menuId'); 
    this.flag = "0";
    this.scrollNow = "2500";

    this.subMenus = [
      { id: 5,   border_type: 1, parent_id: 1,   title: '8 day challenge',                            contain: 'none',   type: 'list', child_type: 1, url: ''},
      { id: 6,   border_type: 2, parent_id: 1,   title: '8 day micro course',                         contain: 'none',   type: 'list', child_type: 2, url: ''},
      { id: 7,   border_type: 3, parent_id: 1,   title: 'More',                                       contain: 'none',   type: 'list', child_type: 3, url: ''},
      { id: 8,   border_type: 1, parent_id: 2,   title: "I like them short",                          contain: 'none',   type: 'list', child_type: 1, url: ''},
      { id: 9,   border_type: 2, parent_id: 2,   title: "I'm used to this",                           contain: 'none',   type: 'list', child_type: 1, url: ''},
      { id: 10,  border_type: 3, parent_id: 2,   title: "Let's go deeper",                            contain: 'none',   type: 'list', child_type: 3, url: ''},
      { id: 11,  border_type: 1, parent_id: 3,   title: 'An Imaginary Line',                          contain: 'video',  type: 'html', child_type: 1, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 12,  border_type: 2, parent_id: 3,   title: 'An Imaginary Balloon',                       contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 13,  border_type: 3, parent_id: 3,   title: 'Choose It - Use It',                         contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 14,  border_type: 1, parent_id: 3,   title: 'Getting With The Flow',                      contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 15,  border_type: 2, parent_id: 3,   title: 'Awareness trainin with a bell',              contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 16,  border_type: 3, parent_id: 3,   title: 'The Word outside',                           contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 17,  border_type: 1, parent_id: 3,   title: 'Being in the body',                          contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 18,  border_type: 2, parent_id: 3,   title: 'Mindful check In',                           contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 19,  border_type: 3, parent_id: 3,   title: 'Choose It - Use It',                         contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 20,  border_type: 1, parent_id: 3,   title: 'The Breath and Beyond',                      contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 21,  border_type: 2, parent_id: 3,   title: 'Body-Mind-World',                            contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 22,  border_type: 3, parent_id: 3,   title: 'Out and about',                              contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 23,  border_type: 1, parent_id: 3,   title: 'With the World',                             contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 24,  border_type: 2, parent_id: 3,   title: 'Letting go of controll',                     contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 25,  border_type: 3, parent_id: 3,   title: 'The Body and Beyond',                        contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 26,  border_type: 1, parent_id: 3,   title: 'The four phase practice',                    contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 27,  border_type: 2, parent_id: 3,   title: 'Nothing Matters',                            contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 28,  border_type: 3, parent_id: 3,   title: 'Releasing Resistance',                       contain: 'video',  type: 'html', child_type: 2, url: 'assets/2.Meditate-Now/202.5.An-imaginary-balloon(7mins).html'},
      { id: 29,  border_type: 1, parent_id: 4,   title: 'Intro to the book',                          contain: 'none',   type: 'menu', child_type: 1, url: ''},
      { id: 30,  border_type: 2, parent_id: 4,   title: 'Introduction to mindfulness',                contain: 'none',   type: 'menu', child_type: 3, url: ''},
      { id: 31,  border_type: 3, parent_id: 4,   title: 'Mind and emotions',                          contain: 'none',   type: 'menu', child_type: 3, url: ''},
      { id: 32,  border_type: 1, parent_id: 4,   title: 'Patterns of behaviour',                      contain: 'none',   type: 'menu', child_type: 3, url: ''},
      { id: 33,  border_type: 2, parent_id: 4,   title: 'The art of allowing',                        contain: 'none',   type: 'menu', child_type: 3, url: ''},
      { id: 34,  border_type: 3, parent_id: 4,   title: 'Final words',                                contain: 'none',   type: 'menu', child_type: 3, url: ''},
      { id: 35,  border_type: 1, parent_id: 8,   title: 'Guided Mindfulness',                         contain: 'none',   type: 'list', child_type: 1, url: ''},
      { id: 36,  border_type: 2, parent_id: 8,   title: 'Experiential Exercises',                     contain: 'none',   type: 'list', child_type: 2, url: ''},
      { id: 37,  border_type: 3, parent_id: 8,   title: 'Tips And Tools',                             contain: 'none',   type: 'list', child_type: 3, url: ''},
      { id: 38,  border_type: 1, parent_id: 9,   title: 'Guided Mindfulness',                         contain: 'none',   type: 'list', child_type: 1, url: ''},
      { id: 39,  border_type: 2, parent_id: 9,   title: 'Experiential Exercises',                     contain: 'none',   type: 'list', child_type: 2, url: ''},
      { id: 40,  border_type: 3, parent_id: 9,   title: 'Tips And Tools',                             contain: 'none',   type: 'list', child_type: 3, url: ''},
      { id: 41,  border_type: 1, parent_id: 10,  title: 'Guided Mindfulness',                         contain: 'none',   type: 'list', child_type: 1, url: ''},
      { id: 42,  border_type: 2, parent_id: 10,  title: 'Experiential Exercises',                     contain: 'none',   type: 'list', child_type: 2, url: ''},
      { id: 43,  border_type: 3, parent_id: 10,  title: 'Tips And Tools',                             contain: 'none',   type: 'list', child_type: 3, url: ''},
      { id: 44,  border_type: 1, parent_id: 13,  title: 'Sub Heads',                                  contain: 'none',   type: 'html', child_type: 3, url: ''},
      { id: 45,  border_type: 2, parent_id: 14,  title: 'Sub Heads',                                  contain: 'none',   type: 'html', child_type: 3, url: ''},
      { id: 46,  border_type: 1, parent_id: 35,  title: 'Mindfulness is like a triangle',             contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_like_them_short/guided_mindfulness/mindfulness_is_like_a_triangle.html'},
      { id: 47,  border_type: 2, parent_id: 35,  title: 'An imaginary balloon (7 mins)',              contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 48,  border_type: 3, parent_id: 35,  title: 'An imaginary line (8 mins)',                 contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_line_eight_mins.html'},
      { id: 49,  border_type: 1, parent_id: 35,  title: 'Choose it - Use it (8 mins)',                contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/choose_it_use_it_eight_mins.html'},
      { id: 50,  border_type: 2, parent_id: 35,  title: 'Getting with the flow (7 mins)',             contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_like_them_short/guided_mindfulness/getting_with_the_flow_seven_mins.html'},
      { id: 51,  border_type: 3, parent_id: 35,  title: 'The world outside (11 mins)',                contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_like_them_short/guided_mindfulness/the_world_outside_eleven_mins.html'},
      { id: 52,  border_type: 1, parent_id: 35,  title: 'Being in the body (11 mins)',                contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_like_them_short/guided_mindfulness/being_in_the_body_eleven_mins.html'},
      { id: 53,  border_type: 1, parent_id: 36,  title: 'Stories on a Stream',                        contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_like_them_short/experiential_exercises/stories_on_a_stream.html'},
      { id: 54,  border_type: 2, parent_id: 36,  title: 'Three minute nothing exercise',              contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_like_them_short/experiential_exercises/three_minute_nothing_exercise.html'},
      { id: 55,  border_type: 3, parent_id: 36,  title: 'Be here now',                                contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_like_them_short/experiential_exercises/be_herep_now_and_maybe.html'},
      { id: 56,  border_type: 1, parent_id: 37,  title: 'One minute BMW',                             contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_like_them_short/tips_and_tools/one_minute_bmw.html'},
      { id: 57,  border_type: 2, parent_id: 37,  title: 'Stepping back',                              contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html'},
      { id: 58,  border_type: 3, parent_id: 37,  title: 'Labelling',                                  contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_like_them_short/tips_and_tools/labelling.html'},
      { id: 59,  border_type: 1, parent_id: 37,  title: 'SOS 1',                                      contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_like_them_short/tips_and_tools/sos_one.html'},
      { id: 60,  border_type: 1, parent_id: 38,  title: 'Thoughts are like rain on a windscreen',     contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 61,  border_type: 2, parent_id: 38,  title: 'Mindful Check-In',                           contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 62,  border_type: 3, parent_id: 38,  title: 'Choose It - Use It',                         contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 63,  border_type: 1, parent_id: 38,  title: 'The Breath and Beyond',                      contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 64,  border_type: 2, parent_id: 38,  title: 'Body-Mind-World',                            contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 65,  border_type: 3, parent_id: 38,  title: 'Out and about',                              contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 66,  border_type: 1, parent_id: 38,  title: 'With the World',                             contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 67,  border_type: 2, parent_id: 38,  title: 'Letting go of controll',                     contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 68,  border_type: 3, parent_id: 39,  title: 'Balloons in the sky',                        contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 69,  border_type: 1, parent_id: 39,  title: 'Thoughts as things',                         contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 70,  border_type: 2, parent_id: 39,  title: 'The Observer Within',                        contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 71,  border_type: 3, parent_id: 39,  title: 'The art of Allowing',                        contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 72,  border_type: 1, parent_id: 40,  title: 'TWO Minute Stress Release',                  contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 73,  border_type: 2, parent_id: 40,  title: 'Three minute BMW',                           contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 74,  border_type: 3, parent_id: 40,  title: 'Anchoring',                                  contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 75,  border_type: 1, parent_id: 40,  title: 'SOS 2',                                      contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 76,  border_type: 1, parent_id: 41,  title: 'Feelings are like people at a guesthouse',   contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 77,  border_type: 2, parent_id: 41,  title: 'The Body and beyond',                        contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 78,  border_type: 3, parent_id: 41,  title: 'The four phase practice',                    contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 79,  border_type: 1, parent_id: 41,  title: 'Nothing Matters',                            contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 90,  border_type: 2, parent_id: 41,  title: 'Choose It - Use It',                         contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 91,  border_type: 3, parent_id: 41,  title: 'Unguided',                                   contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 92,  border_type: 1, parent_id: 41,  title: 'Releasing Resistance',                       contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 93,  border_type: 2, parent_id: 42,  title: 'Thought Screen',                             contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 94,  border_type: 3, parent_id: 42,  title: 'The Observer Within',                        contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 95,  border_type: 1, parent_id: 42,  title: 'The art of Allowing',                        contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 96,  border_type: 2, parent_id: 22,  title: 'Be Here now',                                contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 97,  border_type: 1, parent_id: 43,  title: 'Three minute breathing space',               contain: 'none',   type: 'html', child_type: 1, url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 98,  border_type: 2, parent_id: 43,  title: 'Remember Who you are',                       contain: 'none',   type: 'html', child_type: 2, url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 99,  border_type: 3, parent_id: 43,  title: 'SOS 3',                                      contain: 'none',   type: 'html', child_type: 3, url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 100, border_type: 1, parent_id: 5,   title: 'The 8 Day Challenge',                        contain: 'none',   type: 'html', child_type: 1, url: 'assets/challenges/eight_day_challenge/the_eight_day_challenge.html'},
      { id: 101, border_type: 2, parent_id: 6,   title: 'Introduction',                               contain: 'none',   type: 'html', child_type: 2, url: 'assets/challenges/eight_day_micro_course/introduction.html'},
      { id: 102, border_type: 3, parent_id: 6,   title: 'Mindfulness is...',                          contain: 'none',   type: 'html', child_type: 3, url: 'assets/challenges/eight_day_micro_course/module_one_mindfulness_is.html'},
      { id: 103, border_type: 1, parent_id: 6,   title: 'Meaningful connection',                      contain: 'none',   type: 'html', child_type: 1, url: 'assets/challenges/eight_day_micro_course/module_two_meaningful_connection.html'},
      { id: 104, border_type: 2, parent_id: 6,   title: 'Thoughts and thinking',                      contain: 'none',   type: 'html', child_type: 2, url: 'assets/challenges/eight_day_micro_course/module_three_thoughts_and_thinking.html'},
      { id: 105, border_type: 3, parent_id: 6,   title: 'Emotions and feeling',                       contain: 'none',   type: 'html', child_type: 3, url: 'assets/challenges/eight_day_micro_course/module_four_emotions_and_feeling.html'},
      { id: 106, border_type: 1, parent_id: 6,   title: 'Patterns of behaviour',                      contain: 'none',   type: 'html', child_type: 1, url: 'assets/challenges/eight_day_micro_course/module_five_patterns_of_behaviour.html'},
      { id: 107, border_type: 2, parent_id: 6,   title: 'Resistance traps',                           contain: 'none',   type: 'html', child_type: 2, url: 'assets/challenges/eight_day_micro_course/module_six_resistance_traps.html'},
      { id: 108, border_type: 3, parent_id: 6,   title: 'The observer',                               contain: 'none',   type: 'html', child_type: 3, url: 'assets/challenges/eight_day_micro_course/module_seven_the_observer.html'},
      { id: 109, border_type: 1, parent_id: 6,   title: 'Turning towards',                            contain: 'none',   type: 'html', child_type: 1, url: 'assets/challenges/eight_day_micro_course/module_eight_turning_towards.html'},
      { id: 110, border_type: 2, parent_id: 6,   title: 'End of course',                              contain: 'none',   type: 'html', child_type: 2, url: 'assets/challenges/eight_day_micro_course/end_of_course.html'},
      { id: 111, border_type: 3, parent_id: 6,   title: 'And after this',                             contain: 'none',   type: 'html', child_type: 3, url: 'assets/challenges/eight_day_micro_course/and_after_this.html'},
      { id: 112, border_type: 1, parent_id: 29,  title: 'Introduction to this book',                  contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_1_intro_to_the_book/introduction_to_this_book.html'},
      { id: 113, border_type: 2, parent_id: 30,  title: 'Start',                                      contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_2_introduction_to_mindfulness/start.html'},
      { id: 114, border_type: 3, parent_id: 30,  title: 'What is mindfulness - part one',             contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_2_introduction_to_mindfulness/what_is_mindfulness_partone.html'},
      { id: 115, border_type: 1, parent_id: 30,  title: 'What is mindfulness - part two',             contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_2_introduction_to_mindfulness/what_is_mindfulness_part_two.html'},
      { id: 116, border_type: 2, parent_id: 30,  title: 'Meaningful connection - part one',           contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_one.html'},
      { id: 117, border_type: 3, parent_id: 30,  title: 'Meaningful connection - part two',           contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_two.html'},
      { id: 118, border_type: 1, parent_id: 30,  title: 'Meaningful connection - part three',         contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_three.html'},
      { id: 119, border_type: 2, parent_id: 30,  title: 'Overcoming boredom - part two',              contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_2_introduction_to_mindfulness/overcoming_boredom_part_two.html'},
      { id: 120, border_type: 3, parent_id: 30,  title: 'Overcoming boredom - part one',              contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_2_introduction_to_mindfulness/overcoming_boredom_part_one.html'},
      { id: 121, border_type: 1, parent_id: 30,  title: 'Distractions',                               contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_2_introduction_to_mindfulness/distractions.html'},
      { id: 122, border_type: 2, parent_id: 30,  title: 'Being content with a monkey mind',           contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_2_introduction_to_mindfulness/being_content_with_a_monkey_mind.html'},
      { id: 123, border_type: 3, parent_id: 30,  title: 'A new dimension to things',                  contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_2_introduction_to_mindfulness/a_new_dimension_to_things.html'},
      { id: 124, border_type: 1, parent_id: 30,  title: 'End of section',                             contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_2_introduction_to_mindfulness/end_of_section.html'},
      { id: 125, border_type: 2, parent_id: 30,  title: 'Summary',                                    contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_2_introduction_to_mindfulness/summary.html'},
      { id: 126, border_type: 1, parent_id: 31,  title: 'Your Mind',                                  contain: 'none',  type: 'list', child_type: 3, url: ''},
      { id: 127, border_type: 2, parent_id: 31,  title: 'Thoughts-as-thoughts',                       contain: 'none',  type: 'list', child_type: 1, url: ''},
      { id: 128, border_type: 3, parent_id: 31,  title: 'Feelings-as-feelings',                       contain: 'none',  type: 'list', child_type: 2, url: ''},
      { id: 129, border_type: 1, parent_id: 126, title: 'Start',                                      contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/start.html'},
      { id: 130, border_type: 2, parent_id: 126, title: 'What is my mind',                            contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/what_is_my_mind.html'},
      { id: 131, border_type: 3, parent_id: 126, title: 'Input only',                                 contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/input_only.html'},
      { id: 132, border_type: 1, parent_id: 126, title: 'Thought upon thought',                       contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/thought_upon_thought.html'},
      { id: 133, border_type: 2, parent_id: 126, title: 'Internal and external world problems',       contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/internal_and_external_world_problems.html'},
      { id: 134, border_type: 3, parent_id: 126, title: 'A problem with problem-solving',             contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/a_problem_with_problem_solving.html'},
      { id: 135, border_type: 1, parent_id: 126, title: 'End of section',                             contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/end_of_section.html'},
      { id: 136, border_type: 2, parent_id: 126, title: 'Summary',                                    contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/summary.html'},
      { id: 137, border_type: 1, parent_id: 127, title: 'Start',                                      contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/start.html'},
      { id: 138, border_type: 2, parent_id: 127, title: 'Associations - part one 2',                  contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/associations_part_one_2.html'},
      { id: 139, border_type: 3, parent_id: 127, title: 'Associations - part one',                    contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/associations_part_one.html'},
      { id: 140, border_type: 1, parent_id: 127, title: 'Associations - part two',                    contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/associations_part_two.html'},
      { id: 141, border_type: 2, parent_id: 127, title: 'Solutions',                                  contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/solutions.html'},
      { id: 142, border_type: 3, parent_id: 127, title: 'Buying and battling',                        contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/buying_and_battling.html'},
      { id: 143, border_type: 1, parent_id: 127, title: 'Not feeling better',                         contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/not_feeling_better.html'},
      { id: 144, border_type: 2, parent_id: 127, title: 'Sounds on the outside',                      contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/sounds_on_the_outside.html'},
      { id: 145, border_type: 3, parent_id: 127, title: 'End of section',                             contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/end_of_section.html'},
      { id: 146, border_type: 1, parent_id: 127, title: 'Summary',                                    contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/summary.html'},
      { id: 147, border_type: 1, parent_id: 128, title: 'Start',                                      contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/start.html'},
      { id: 148, border_type: 2, parent_id: 128, title: 'Fear',                                       contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/fear.html'},
      { id: 149, border_type: 3, parent_id: 128, title: 'Normal human emotions',                      contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/normal_human_emotions.html'},
      { id: 150, border_type: 1, parent_id: 128, title: 'Good or bad',                                contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/good_or_bad.html'},
      { id: 151, border_type: 2, parent_id: 128, title: 'A beautiful but uncomfortable sunrise',      contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/a_beautiful_but_uncomfortable_sunrise.html'},
      { id: 152, border_type: 3, parent_id: 128, title: 'End of section',                             contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/end_of_section.html'},
      { id: 153, border_type: 1, parent_id: 128, title: 'Summary',                                    contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/summary.html'},
      { id: 154, border_type: 1, parent_id: 32,  title: 'The little patterns',                        contain: 'none',  type: 'list', child_type: 1, url: ''},
      { id: 155, border_type: 2, parent_id: 32,  title: 'Inner resistance',                           contain: 'none',  type: 'list', child_type: 2, url: ''},
      { id: 156, border_type: 3, parent_id: 32,  title: 'Resistance traps',                           contain: 'none',  type: 'list', child_type: 3, url: ''},
      { id: 157, border_type: 1, parent_id: 154, title: 'Start',                                      contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/start.html'},
      { id: 158, border_type: 1, parent_id: 154, title: 'The little patterns - part one',             contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/the_little_patterns_part_one.html'},
      { id: 159, border_type: 3, parent_id: 154, title: 'The little patterns - part two',             contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/the_little_patterns_part_two.html'},
      { id: 160, border_type: 1, parent_id: 154, title: 'More and more',                              contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/more_and_more.html'},
      { id: 161, border_type: 2, parent_id: 154, title: 'End of section',                             contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/end_of_section.html'},
      { id: 162, border_type: 3, parent_id: 154, title: 'Summary',                                    contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/summary.html'},
      { id: 163, border_type: 1, parent_id: 155, title: 'Start',                                      contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/start.html'},
      { id: 164, border_type: 2, parent_id: 155, title: 'Inner resistance',                           contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/inner_resistance.html'},
      { id: 165, border_type: 3, parent_id: 155, title: 'What a state',                               contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/what_a_state.html'},
      { id: 166, border_type: 1, parent_id: 155, title: 'Quick fixes',                                contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/quick_fixes.html'},
      { id: 167, border_type: 2, parent_id: 155, title: 'Do you really want to',                      contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/do_you_really_want_to.html'},
      { id: 168, border_type: 3, parent_id: 155, title: 'Arguing with reality',                       contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/arguing_with_reality.html'},
      { id: 169, border_type: 1, parent_id: 155, title: 'The feeling good trap - part two',           contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/the_feeling_good_trap_part_two.html'},
      { id: 170, border_type: 2, parent_id: 155, title: 'The feeling good trap - part three',         contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/the_feeling_good_trap_part_three.html'},
      { id: 171, border_type: 3, parent_id: 155, title: 'The feeling good trap - part one',           contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/the_feeling_good_trap_part_one.html'},
      { id: 172, border_type: 1, parent_id: 155, title: 'In (or out of) control',                     contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/in_or_out_of_control.html'},
      { id: 173, border_type: 2, parent_id: 155, title: 'How your brain changes with mindfulness',    contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/how_your_brain_changes_with_mindfulness.html'},
      { id: 174, border_type: 3, parent_id: 155, title: 'Neuro-what',                                 contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/neuro_what.html'},
      { id: 175, border_type: 1, parent_id: 155, title: 'End of section',                             contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/end_of_section.html'},
      { id: 176, border_type: 2, parent_id: 155, title: 'Summary',                                    contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/summary.html'},
      { id: 177, border_type: 1, parent_id: 156, title: 'Start',                                      contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/start.html'},
      { id: 178, border_type: 2, parent_id: 156, title: 'Catherine the chameleon',                    contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/catherine_the_chameleon.html'},
      { id: 179, border_type: 3, parent_id: 156, title: 'Sarita the scratcher',                       contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/sarita_the_scratcher.html'},
      { id: 180, border_type: 1, parent_id: 156, title: 'Suzie and Soloman',                          contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/suzie_and_soloman.html'},
      { id: 181, border_type: 2, parent_id: 156, title: 'Joe the joker',                              contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/joe_the_joker.html'},
      { id: 182, border_type: 3, parent_id: 156, title: 'Reuben the rebel',                           contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/reuben_the_rebel.html'},
      { id: 183, border_type: 1, parent_id: 156, title: 'End of section',                             contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/end_of_section.html'},
      { id: 184, border_type: 2, parent_id: 156, title: 'Summary',                                    contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/summary.html'},
      { id: 185, border_type: 1, parent_id: 33,  title: 'Start',                                      contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_5_the_art_of_allowing/start.html'},
      { id: 186, border_type: 2, parent_id: 33,  title: 'A bit about me',                             contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_5_the_art_of_allowing/a_bit_about_me.html'},
      { id: 187, border_type: 3, parent_id: 33,  title: 'What am i noticing',                         contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_5_the_art_of_allowing/what_am_i_noticing.html'},
      { id: 188, border_type: 1, parent_id: 33,  title: 'The Observer Within - part two',             contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_5_the_art_of_allowing/the_observer_within_part_two.html'},
      { id: 189, border_type: 2, parent_id: 33,  title: 'The Observer Within - part one',             contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_5_the_art_of_allowing/the_observer_within_part_one.html'},
      { id: 190, border_type: 3, parent_id: 33,  title: 'Phase one - Expanding',                      contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_5_the_art_of_allowing/phase_one_expanding.html'},
      { id: 191, border_type: 1, parent_id: 33,  title: 'The art of allowing',                        contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_5_the_art_of_allowing/the_art_of_allowing.html'},
      { id: 192, border_type: 2, parent_id: 33,  title: 'The 4 major benefits to the art of allowing',contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_5_the_art_of_allowing/the_four_major_benefits_to_the_art_of_allowing.html'},
      { id: 193, border_type: 3, parent_id: 33,  title: 'Phase two - Exploring',                      contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_5_the_art_of_allowing/phase_two_exploring.html'},
      { id: 194, border_type: 1, parent_id: 33,  title: 'Noticing the difference',                    contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/ch_5_the_art_of_allowing/noticing_the_difference.html'},
      { id: 195, border_type: 2, parent_id: 33,  title: 'End of section',                             contain: 'none',  type: 'html', child_type: 3, url: 'assets/read/ch_5_the_art_of_allowing/end_of_section.html'},
      { id: 196, border_type: 3, parent_id: 33,  title: 'Summary',                                    contain: 'none',  type: 'html', child_type: 1, url: 'assets/read/ch_5_the_art_of_allowing/summary.html'},
      { id: 197, border_type: 1, parent_id: 34,  title: 'Final words',                                contain: 'none',  type: 'html', child_type: 2, url: 'assets/read/final_words/final_words.html'},
    ];
  }

  sayHello(str) {
    this.selectedId=str;
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

  viewPage(event, url) {
    this.navCtrl.push(ViewPage, {
      url: url
    });
  }

}
