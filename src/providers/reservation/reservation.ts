import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ReservationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReservationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ReservationProvider Provider');
  }

  placeReservation(name){
    return this.http.get("http://localhost:8080/sendMail/?id=" + name)
  }

}
