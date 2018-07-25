import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {ReservationProvider} from "../../providers/reservation/reservation";
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-Kontakt',
  templateUrl: 'Kontakt.html'
})
export class KontaktPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

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



  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private _reservation: ReservationProvider,
              private callNumber: CallNumber, public geolocation: Geolocation) {

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

  callJoint(telephoneNumber) {
    this.callNumber.callNumber(`0205482200`, true);
  }

  ionViewDidLoad(){
    this.loadMap();
  }


  loadMap(){

    //this.geolocation.getCurrentPosition().then((position) => {

      //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let latLng = new google.maps.LatLng(51.3779942, 6.915314200000012);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   // }, (err) => {
   //   console.log(err);
   // });

  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }


}
