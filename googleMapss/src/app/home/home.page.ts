import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import {} from '@capacitor/google-maps';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

interface MyPoint {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  zoom: 12;
  center: google.maps.LatLngLiteral;
  points: MyPoint[] = [
    {
      position: {
        lat: -33.606553,
        lng: -70.685776,
      },
      title: 'casa del la mochilaaa',
      text: 'texto',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.getPosition();
  }

  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    // console.log(coordinates.coords.latitude);
    this.center = {
      lat: -33.606553,
      lng: -70.685776,
      // lat: coordinates.coords.latitude,
      // lng: coordinates.coords.longitude,
    };
  }

  addMarker(marker: MyPoint){
    return new google.maps.Marker({
      position: marker.position,
      title: marker.title
    })
  }
}