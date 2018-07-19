import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {ReservationProvider} from "../../providers/reservation/reservation";

@Component({
  selector: 'page-Kontakt',
  templateUrl: 'Kontakt.html'
})
export class KontaktPage {

  name: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private _reservation: ReservationProvider) {
    this.name = "Kein Name";
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


  placeReservation(name) {
    this._reservation.placeReservation(name).subscribe(
      data => {
        console.log(data);
      }
    );
    console.log("Sende Reservierung für " + name);
    this.showToast()
  }


}
