import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-Gutschein',
  templateUrl: 'Gutschein.html'
})
export class GutscheinPage {

      constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    //ToDO Cannot find name doAlert
    /*doAlert() {
      let alert = this.alertCtrl.create({
        title: 'BESTELLUNG ERFOLGREICH!',
        message: 'Ihre Bestellung ist bei uns eingegangen. Wir setzen uns schnellstmöglich mit Ihnen in Verbindung',
        buttons: ['Ok']
      });
      alert.present()
    }*/
  }
}
