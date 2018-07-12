import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'Speisekarte.html'
})
export class SpeisekartePage {
  menu: string = "Sushi";

  constructor(public navCtrl: NavController) {

  }

}
