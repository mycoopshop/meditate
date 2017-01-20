import { NavController, NavParams } 	from 'ionic-angular';
import { Component } 					from '@angular/core';
import {MenuPage}  						from '../menu/menu';
import {ListPage}  	from '../list/list';
import {ViewPage}  	from '../view/view';


@Component({
  templateUrl: 'build/pages/video/video.html',
})

export class VideoPage {
  listMenuId: any;
  listMenuPId: any;
  MainMenuPTitle: string;
  ListMenuPTitle: string;

  htmlLists: Array<{id: number, parent_id: number, title: string, contain: string, url: string}>;

  constructor(private nav: NavController, public navParams: NavParams) {
  	this.listMenuId = navParams.get('listMenuId');
  	this.listMenuPId = navParams.get('listMenuPId');
  	this.MainMenuPTitle = navParams.get('mainMenuParentTitle');
  	this.ListMenuPTitle = navParams.get('listMenuParentTitle');

  	this.htmlLists = [
  	  { id: 1,   parent_id: 5,   title: 'The 8 Day Challenge',                        contain: 'none', url: 'assets/challenges/eight_day_challenge/the_eight_day_challenge.html'},
      { id: 2,   parent_id: 6,   title: 'Introduction',                               contain: 'none', url: 'assets/challenges/eight_day_micro_course/introduction.html'},
      { id: 3,   parent_id: 6,   title: 'Mindfulness is...',                          contain: 'none', url: 'assets/challenges/eight_day_micro_course/module_one_mindfulness_is.html'},
      { id: 4,   parent_id: 6,   title: 'Meaningful connection',                      contain: 'none', url: 'assets/challenges/eight_day_micro_course/module_two_meaningful_connection.html'},
      { id: 5,   parent_id: 6,   title: 'Thoughts and thinking',                      contain: 'none', url: 'assets/challenges/eight_day_micro_course/module_three_thoughts_and_thinking.html'},
      { id: 6,   parent_id: 6,   title: 'Emotions and feeling',                       contain: 'none', url: 'assets/challenges/eight_day_micro_course/module_four_emotions_and_feeling.html'},
      { id: 7,   parent_id: 6,   title: 'Patterns of behaviour',                      contain: 'none', url: 'assets/challenges/eight_day_micro_course/module_five_patterns_of_behaviour.html'},
      { id: 8,   parent_id: 6,   title: 'Resistance traps',                           contain: 'none', url: 'assets/challenges/eight_day_micro_course/module_six_resistance_traps.html'},
      { id: 9,   parent_id: 6,   title: 'The observer',                               contain: 'none', url: 'assets/challenges/eight_day_micro_course/module_seven_the_observer.html'},
      { id: 10,  parent_id: 6,   title: 'Turning towards',                            contain: 'none', url: 'assets/challenges/eight_day_micro_course/module_eight_turning_towards.html'},
      { id: 11,  parent_id: 6,   title: 'End of course',                              contain: 'none', url: 'assets/challenges/eight_day_micro_course/end_of_course.html'},
      { id: 12,  parent_id: 6,   title: 'And after this',                             contain: 'none', url: 'assets/challenges/eight_day_micro_course/and_after_this.html'},
      { id: 13,  parent_id: 35,  title: 'Mindfulness is like a triangle',             contain: 'none', url: 'assets/explore/i_like_them_short/guided_mindfulness/mindfulness_is_like_a_triangle.html'},
      { id: 14,  parent_id: 35,  title: 'An imaginary balloon (7 mins)',              contain: 'none', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_balloon_seven_mins.html'},
      { id: 15,  parent_id: 35,  title: 'An imaginary line (8 mins)',                 contain: 'none', url: 'assets/explore/i_like_them_short/guided_mindfulness/an_imaginary_line_eight_mins.html'},
      { id: 16,  parent_id: 35,  title: 'Choose it - Use it (8 mins)',                contain: 'none', url: 'assets/explore/i_like_them_short/guided_mindfulness/choose_it_use_it_eight_mins.html'},
      { id: 17,  parent_id: 35,  title: 'Getting with the flow (7 mins)',             contain: 'none', url: 'assets/explore/i_like_them_short/guided_mindfulness/getting_with_the_flow_seven_mins.html'},
      { id: 18,  parent_id: 35,  title: 'The world outside (11 mins)',                contain: 'none', url: 'assets/explore/i_like_them_short/guided_mindfulness/the_world_outside_eleven_mins.html'},
      { id: 19,  parent_id: 35,  title: 'Being in the body (11 mins)',                contain: 'none', url: 'assets/explore/i_like_them_short/guided_mindfulness/being_in_the_body_eleven_mins.html'},
      { id: 20,  parent_id: 36,  title: 'Stories on a Stream',                        contain: 'none', url: 'assets/explore/i_like_them_short/experiential_exercises/stories_on_a_stream.html'},
      { id: 21,  parent_id: 36,  title: 'Three minute nothing exercise',              contain: 'none', url: 'assets/explore/i_like_them_short/experiential_exercises/three_minute_nothing_exercise.html'},
      { id: 22,  parent_id: 36,  title: 'Be here now',                                contain: 'none', url: 'assets/explore/i_like_them_short/experiential_exercises/be_herep_now_and_maybe.html'},
      { id: 23,  parent_id: 37,  title: 'One minute BMW',                             contain: 'none', url: 'assets/explore/i_like_them_short/tips_and_tools/one_minute_bmw.html'},
      { id: 24,  parent_id: 37,  title: 'Stepping back',                              contain: 'none', url: 'assets/explore/i_like_them_short/tips_and_tools/stepping_back.html'},
      { id: 25,  parent_id: 37,  title: 'Labelling',                                  contain: 'none', url: 'assets/explore/i_like_them_short/tips_and_tools/labelling.html'},
      { id: 26,  parent_id: 37,  title: 'SOS 1',                                      contain: 'none', url: 'assets/explore/i_like_them_short/tips_and_tools/sos_one.html'},
      { id: 27,  parent_id: 38,  title: 'Thoughts are like rain on a windscreen',     contain: 'none', url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 28,  parent_id: 38,  title: 'Mindful Check-In',                           contain: 'none', url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 29,  parent_id: 38,  title: 'Choose It - Use It',                         contain: 'none', url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 30,  parent_id: 38,  title: 'The Breath and Beyond',                      contain: 'none', url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 31,  parent_id: 38,  title: 'Body-Mind-World',                            contain: 'none', url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 32,  parent_id: 38,  title: 'Out and about',                              contain: 'none', url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 33,  parent_id: 38,  title: 'With the World',                             contain: 'none', url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 34,  parent_id: 38,  title: 'Letting go of controll',                     contain: 'none', url: 'assets/explore/i_m_used_to_this/guided_mindfulness/module_meaningful_connection.html'},
      { id: 35,  parent_id: 39,  title: 'Balloons in the sky',                        contain: 'none', url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 36,  parent_id: 39,  title: 'Thoughts as things',                         contain: 'none', url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 37,  parent_id: 39,  title: 'The Observer Within',                        contain: 'none', url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 38,  parent_id: 39,  title: 'The art of Allowing',                        contain: 'none', url: 'assets/explore/i_m_used_to_this/experiential_exercises/module_meaningful_connection.html'},
      { id: 39,  parent_id: 40,  title: 'TWO Minute Stress Release',                  contain: 'none', url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 40,  parent_id: 40,  title: 'Three minute BMW',                           contain: 'none', url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 41,  parent_id: 40,  title: 'Anchoring',                                  contain: 'none', url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 42,  parent_id: 40,  title: 'SOS 2',                                      contain: 'none', url: 'assets/explore/i_m_used_to_this/tips_and_tools/module_meaningful_connection.html'},
      { id: 43,  parent_id: 41,  title: 'Feelings are like people at a guesthouse',   contain: 'none', url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 44,  parent_id: 41,  title: 'The Body and beyond',                        contain: 'none', url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 45,  parent_id: 41,  title: 'The four phase practice',                    contain: 'none', url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 46,  parent_id: 41,  title: 'Nothing Matters',                            contain: 'none', url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 47,  parent_id: 41,  title: 'Choose It - Use It',                         contain: 'none', url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 48,  parent_id: 41,  title: 'Unguided',                                   contain: 'none', url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 49,  parent_id: 41,  title: 'Releasing Resistance',                       contain: 'none', url: 'assets/explore/lets_go_deeper/guided_mindfulness/module_meaningful_connection.html'},
      { id: 50,  parent_id: 29,  title: 'Introduction to this book',                  contain: 'none', url: 'assets/read/ch_1_intro_to_the_book/introduction_to_this_book.html'},
      { id: 51,  parent_id: 30,  title: 'Start',                                      contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/start.html'},
      { id: 52,  parent_id: 30,  title: 'What is mindfulness - part one',             contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/what_is_mindfulness_partone.html'},
      { id: 53,  parent_id: 30,  title: 'What is mindfulness - part two',             contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/what_is_mindfulness_part_two.html'},
      { id: 54,  parent_id: 30,  title: 'Meaningful connection - part one',           contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_one.html'},
      { id: 55,  parent_id: 30,  title: 'Meaningful connection - part two',           contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_two.html'},
      { id: 56,  parent_id: 30,  title: 'Meaningful connection - part three',         contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/meaningful_connection_part_three.html'},
      { id: 57,  parent_id: 30,  title: 'Overcoming boredom - part two',              contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/overcoming_boredom_part_two.html'},
      { id: 58,  parent_id: 30,  title: 'Overcoming boredom - part one',              contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/overcoming_boredom_part_one.html'},
      { id: 59,  parent_id: 30,  title: 'Distractions',                               contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/distractions.html'},
      { id: 60,  parent_id: 30,  title: 'Being content with a monkey mind',           contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/being_content_with_a_monkey_mind.html'},
      { id: 61,  parent_id: 30,  title: 'A new dimension to things',                  contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/a_new_dimension_to_things.html'},
      { id: 62,  parent_id: 30,  title: 'End of section',                             contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/end_of_section.html'},
      { id: 63,  parent_id: 30,  title: 'Summary',                                    contain: 'none', url: 'assets/read/ch_2_introduction_to_mindfulness/summary.html'},
      { id: 64,  parent_id: 44,  title: 'Start',                                      contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/start.html'},
      { id: 65,  parent_id: 44,  title: 'What is my mind',                            contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/what_is_my_mind.html'},
      { id: 66,  parent_id: 44,  title: 'Input only',                                 contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/input_only.html'},
      { id: 67,  parent_id: 44,  title: 'Thought upon thought',                       contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/thought_upon_thought.html'},
      { id: 68,  parent_id: 44,  title: 'Internal and external world problems',       contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/internal_and_external_world_problems.html'},
      { id: 69,  parent_id: 44,  title: 'A problem with problem-solving',             contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/a_problem_with_problem_solving.html'},
      { id: 70,  parent_id: 44,  title: 'End of section',                             contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/end_of_section.html'},
      { id: 71,  parent_id: 44,  title: 'Summary',                                    contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/1_your_mind/summary.html'},
      { id: 72,  parent_id: 45,  title: 'Start',                                      contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/start.html'},
      { id: 73,  parent_id: 45,  title: 'Associations - part one 2',                  contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/associations_part_one_2.html'},
      { id: 74,  parent_id: 45,  title: 'Associations - part one',                    contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/associations_part_one.html'},
      { id: 75,  parent_id: 45,  title: 'Associations - part two',                    contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/associations_part_two.html'},
      { id: 76,  parent_id: 45,  title: 'Solutions',                                  contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/solutions.html'},
      { id: 77,  parent_id: 45,  title: 'Buying and battling',                        contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/buying_and_battling.html'},
      { id: 78,  parent_id: 45,  title: 'Not feeling better',                         contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/not_feeling_better.html'},
      { id: 79,  parent_id: 45,  title: 'Sounds on the outside',                      contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/sounds_on_the_outside.html'},
      { id: 80,  parent_id: 45,  title: 'End of section',                             contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/end_of_section.html'},
      { id: 81,  parent_id: 45,  title: 'Summary',                                    contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/2_thoughts_as_thoughts/summary.html'},
      { id: 82,  parent_id: 46,  title: 'Start',                                      contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/start.html'},
      { id: 83,  parent_id: 46,  title: 'Fear',                                       contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/fear.html'},
      { id: 84,  parent_id: 46,  title: 'Normal human emotions',                      contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/normal_human_emotions.html'},
      { id: 85,  parent_id: 46,  title: 'Good or bad',                                contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/good_or_bad.html'},
      { id: 86,  parent_id: 46,  title: 'A beautiful but uncomfortable sunrise',      contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/a_beautiful_but_uncomfortable_sunrise.html'},
      { id: 87,  parent_id: 46,  title: 'End of section',                             contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/end_of_section.html'},
      { id: 88,  parent_id: 46,  title: 'Summary',                                    contain: 'none', url: 'assets/read/ch_3_mind_and_emotions/3_feelings_as_feelings/summary.html'},
      { id: 89,  parent_id: 47,  title: 'Start',                                      contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/start.html'},
      { id: 90,  parent_id: 47,  title: 'The little patterns - part one',             contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/the_little_patterns_part_one.html'},
      { id: 91,  parent_id: 47,  title: 'The little patterns - part two',             contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/the_little_patterns_part_two.html'},
      { id: 92,  parent_id: 47,  title: 'More and more',                              contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/more_and_more.html'},
      { id: 93,  parent_id: 47,  title: 'End of section',                             contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/end_of_section.html'},
      { id: 94,  parent_id: 47,  title: 'Summary',                                    contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/1_the_little_patterns/summary.html'},
      { id: 95,  parent_id: 48,  title: 'Start',                                      contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/start.html'},
      { id: 96,  parent_id: 48,  title: 'Inner resistance',                           contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/inner_resistance.html'},
      { id: 97,  parent_id: 48,  title: 'What a state',                               contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/what_a_state.html'},
      { id: 98,  parent_id: 48,  title: 'Quick fixes',                                contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/quick_fixes.html'},
      { id: 99,  parent_id: 48,  title: 'Do you really want to',                      contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/do_you_really_want_to.html'},
      { id: 101, parent_id: 48,  title: 'Arguing with reality',                       contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/arguing_with_reality.html'},
      { id: 102, parent_id: 48,  title: 'The feeling good trap - part two',           contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/the_feeling_good_trap_part_two.html'},
      { id: 103, parent_id: 48,  title: 'The feeling good trap - part three',         contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/the_feeling_good_trap_part_three.html'},
      { id: 104, parent_id: 48,  title: 'The feeling good trap - part one',           contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/the_feeling_good_trap_part_one.html'},
      { id: 105, parent_id: 48,  title: 'In (or out of) control',                     contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/in_or_out_of_control.html'},
      { id: 106, parent_id: 48,  title: 'How your brain changes with mindfulness',    contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/how_your_brain_changes_with_mindfulness.html'},
      { id: 107, parent_id: 48,  title: 'Neuro-what',                                 contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/neuro_what.html'},
      { id: 108, parent_id: 48,  title: 'End of section',                             contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/end_of_section.html'},
      { id: 109, parent_id: 48,  title: 'Summary',                                    contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/2_inner_resistance/summary.html'},
      { id: 110, parent_id: 49,  title: 'Start',                                      contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/start.html'},
      { id: 111, parent_id: 49,  title: 'Catherine the chameleon',                    contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/catherine_the_chameleon.html'},
      { id: 112, parent_id: 49,  title: 'Sarita the scratcher',                       contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/sarita_the_scratcher.html'},
      { id: 113, parent_id: 49,  title: 'Suzie and Soloman',                          contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/suzie_and_soloman.html'},
      { id: 44,  parent_id: 49,  title: 'Joe the joker',                              contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/joe_the_joker.html'},
      { id: 115, parent_id: 49,  title: 'Reuben the rebel',                           contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/reuben_the_rebel.html'},
      { id: 116, parent_id: 49,  title: 'End of section',                             contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/end_of_section.html'},
      { id: 117, parent_id: 49,  title: 'Summary',                                    contain: 'none', url: 'assets/read/ch_4_patterns_of_behaviour/3_resistance_traps/summary.html'},
      { id: 118, parent_id: 33,  title: 'Start',                                      contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/start.html'},
      { id: 119, parent_id: 33,  title: 'A bit about me',                             contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/a_bit_about_me.html'},
      { id: 120, parent_id: 33,  title: 'What am i noticing',                         contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/what_am_i_noticing.html'},
      { id: 121, parent_id: 33,  title: 'The Observer Within - part two',             contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/the_observer_within_part_two.html'},
      { id: 122, parent_id: 33,  title: 'The Observer Within - part one',             contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/the_observer_within_part_one.html'},
      { id: 123, parent_id: 33,  title: 'Phase one - Expanding',                      contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/phase_one_expanding.html'},
      { id: 124, parent_id: 33,  title: 'The art of allowing',                        contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/the_art_of_allowing.html'},
      { id: 125, parent_id: 33,  title: 'The 4 major benefits to the art of allowing',contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/the_four_major_benefits_to_the_art_of_allowing.html'},
      { id: 126, parent_id: 33,  title: 'Phase two - Exploring',                      contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/phase_two_exploring.html'},
      { id: 127, parent_id: 33,  title: 'Noticing the difference',                    contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/noticing_the_difference.html'},
      { id: 128, parent_id: 33,  title: 'End of section',                             contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/end_of_section.html'},
      { id: 129, parent_id: 33,  title: 'Summary',                                    contain: 'none', url: 'assets/read/ch_5_the_art_of_allowing/summary.html'},
      { id: 130, parent_id: 34,  title: 'Final words',                                contain: 'none', url: 'assets/read/final_words/final_words.html'},
      { id: 131, parent_id: 42,  title: 'Thought Screen',                             contain: 'none', url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 132, parent_id: 42,  title: 'The Observer Within',                        contain: 'none', url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 133, parent_id: 42,  title: 'The art of Allowing',                        contain: 'none', url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 134, parent_id: 42,  title: 'Be Here now',                                contain: 'none', url: 'assets/explore/lets_go_deeper/experiential_exercises/module_meaningful_connection.html'},
      { id: 135, parent_id: 43,  title: 'Three minute breathing space',               contain: 'none', url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 136, parent_id: 43,  title: 'Remember Who you are',                       contain: 'none', url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'},
      { id: 137, parent_id: 43,  title: 'SOS 3',                                      contain: 'none', url: 'assets/explore/lets_go_deeper/tips_and_tools/module_meaningful_connection.html'}
  	];
  }

  goToHome() {
    this.nav.insert(0, MenuPage,{},{direction: 'back'});
  }

  viewPage(event, url, id) {
    this.nav.push(ViewPage, {
      url: url,
      Id: id
    });
  }

  goBack() {
    if(this.listMenuPId != null)
      {	this.listMenuId
        this.nav.insert(1,ListPage, {
          menuId: this.listMenuPId
        },{direction: 'back'});
      }
    else
      {
        this.nav.pop();
      }
  }

}
