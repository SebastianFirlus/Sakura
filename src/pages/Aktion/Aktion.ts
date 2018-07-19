import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ActionsProvider} from "../../providers/actions/actions";

@Component({
  selector: 'page-Aktion',
  templateUrl: 'Aktion.html'
})
export class AktionPage {

  MonthActionsArray;
  WeekActionsArray;
  SpecialsArray;

  constructor(public navCtrl: NavController, private _action: ActionsProvider) {

    _action.getActionOfTheMonth().subscribe(
      data => {
        this.MonthActionsArray = data;
      }
    );

    _action.getActionOfTheWeek().subscribe(
      data => {
        this.WeekActionsArray = data;
      }
    );

    _action.getSpecials().subscribe(
      data => {
        this.SpecialsArray = data;
      }
    )

  }

}
