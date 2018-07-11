import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-Kontakt',
  templateUrl: 'Kontakt.html'
})
export class KontaktPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

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

}
