import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {CountdownTimer} from './countdownTimer.ts';
import {NavController, NavParams, Content} from 'ionic-angular';
import {ListPage} from '../list/list';
import {MenuPage} from '../menu/menu';
import {PopUpPage} from '../pop-up/pop-up';

@Component({
  selector: 'timer', 
  directives: [],
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  @Input() timeInSeconds: number;
  private timer: CountdownTimer;

  menuPage = MenuPage;
  listPage = ListPage;
  popUpPage = PopUpPage;

  constructor(private navController: NavController) {

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

  initTimer() {
    if(!this.timeInSeconds) { this.timeInSeconds = 0; }
 
  this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }
   
  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }
 
  pauseTimer() {
    this.timer.runTimer = false;
  }
 
  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }
 
  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }
}
