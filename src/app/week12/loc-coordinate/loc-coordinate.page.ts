import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-loc-coordinate',
  templateUrl: './loc-coordinate.page.html',
  styleUrls: ['./loc-coordinate.page.scss'],
})
export class LocCoordinatePage implements OnInit {
  map: any;
  infoWindow: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  umnPos: any = {
    lat: -6.256881,
    lng: 106.618755
  };

  ionViewDidEnter(){
    this.initMap(this.umnPos);
  }

  initMap(pos: any){
    const location = new google.maps.LatLng(pos.lat, pos.lng);
    const options = {
      center: location,
      zoom: 10,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  
    // Create initial InfoWindow
    this.infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: this.umnPos,
    });
    this.infoWindow.open(this.map);

    // Config click listener
    this.map.addListener('click', (mapsMouseEvent) => {
      // Close current InfoWindow
      this.infoWindow.close();

      // Create new InfoWindow
      this.infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.LatLng,
      });
      this.infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.LatLng.toJSON(), null, 2)
      );
      this.infoWindow.open(this.map);
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
