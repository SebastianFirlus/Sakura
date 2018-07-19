import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {ReservationProvider} from "../../providers/reservation/reservation";

@Component({
  selector: 'page-Kontakt',
  templateUrl: 'Kontakt.html'
})
export class KontaktPage {

  reservation = {
    vorname: null,
    nachname: null,
    email: null,
    number: null,
    date: null,
    time: null,
    persons: null,
    additional: null
  };


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private _reservation: ReservationProvider) {

  }

  showToast() {
    const toast = this.toastCtrl.create({
      message: 'Ihre Reservierung ist bei uns eingegangen.',
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();
  }



  placeReservation(reservierung) {
    this._reservation.placeReservation(JSON.stringify(reservierung)).subscribe(
      data => {
        console.log(data);
      }
    );
    console.log("Sende Reservierung für " + this.reservation.vorname + ' ' + this.reservation.nachname);
    this.showToast()
  }



  postReservation(body){
    this._reservation.postReservation(body);
    console.log("Kontakt.ts sendet " + body)
    console.log("send reservation");
    this.showToast();
  }


}
