import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsProvider} from "../../providers/news/news";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsArray;

  constructor(public navCtrl: NavController, private _news: NewsProvider) {
    _news.getNews().subscribe(
      data => {
        this.newsArray = data;
      }
    );
  }

}
