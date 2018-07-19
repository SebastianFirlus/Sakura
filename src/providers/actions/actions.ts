import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ActionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActionsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ActionsProvider Provider');
  }

  getActionOfTheMonth(){
    return this.http.get('http://localhost:8080/actionofthemonth');
  }

  getActionOfTheWeek(){
    return this.http.get('http://localhost:8080/actionoftheweek');
  }

  getSpecials(){
    return this.http.get('http://localhost:8080/specials');
  }

}
