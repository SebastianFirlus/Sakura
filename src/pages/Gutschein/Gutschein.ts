import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-Gutschein',
  templateUrl: 'Gutschein.html'
})
export class GutscheinPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  showToast() {
    const toast = this.toastCtrl.create({
      message: 'Ihre Bestellung ist bei uns eingegangen.',
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
