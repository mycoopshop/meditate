import { NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { ViewPage } from '../view/view';

@Injectable()
export class GetPageService {

    private url;
    private retryCount = 1;
    //  See the "Take it slow" appendix
    constructor(private _http: Http, navParams: NavParams) {
    
      this.url = navParams.get('url');
    }

    getPage(){
      console.log(this.url);
      return this._http.get(this.url)
        .retry(this.retryCount)
        .map((res) => {
            return res.url;
        })
        .catch((err)=>{
        let errMsg = (err.error) ? err.errmsg : err;
            console.error(errMsg);
            return Observable.throw(errMsg);
        })
    }
}