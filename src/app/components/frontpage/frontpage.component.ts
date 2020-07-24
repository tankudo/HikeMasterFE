import {Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';

import {MapsAPILoader} from '@agm/core';
import {ifTrue} from 'codelyzer/util/function';


interface marker {
  lat: number;
  lng: number;
  // label?: string;
  // draggable: boolean;
  // content?: string;
  isShown: boolean;


  // icon: string;
}


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  private selectedFile: any;
  private http: any;


  title = 'AngularGoogleMaps';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  public iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';


  // Radius
  radius = 30000;
  radiusLat = 0;
  radiusLong = 0;

  markers: marker[] = [
    {isShown: false, lat: 47.5, lng: 19.05},
    {isShown: false, lat: 47.5, lng: 19.10},
    {isShown: false, lat: 47.5, lng: 19.12},
    {isShown: false, lat: 47.19, lng: 20.8}


  ];


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  addMarker(lat: number, lng: number) {
    this.markers.push({isShown: false, lat, lng});
  }


  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {

          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          // this.addMarker(this.latitude, this.longitude);
          this.zoom = 8;
          this.radiusDragEnd({coords: {lat: this.latitude, lng: this.longitude}});
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        //this.addMarker(this.latitude, this.longitude)

        this.radiusLat = this.latitude;
        this.radiusLong = this.longitude;

        this.zoom = 8;


        this.radiusDragEnd({coords: {lat: this.latitude, lng: this.longitude}});


      });
    }
  }


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  radiusDragEnd($event: any) {
    console.log($event);
    this.radiusLat = $event.coords.lat;
    this.radiusLong = $event.coords.lng;
    this.showHideMarkers();
  }

  event(type, $event) {
    console.log(type, $event);
    this.radius = $event;
    this.showHideMarkers();
  }

  markerDragEnd($event: google.maps.MouseEvent) {
    console.log($event);
    this.latitude = $event.latLng.lat();
    this.longitude = $event.latLng.lng();
    this.getAddress(this.latitude, this.longitude);
  }

  showHideMarkers() {
    Object.values(this.markers).forEach(value => {
      value.isShown = this.getDistanceBetween(value.lat, value.lng, this.radiusLat, this.radiusLong);
    });
  }

  getDistanceBetween(lat1, long1, lat2, long2) {
    var from = new google.maps.LatLng(lat1, long1);
    var to = new google.maps.LatLng(lat2, long2);

    if (google.maps.geometry.spherical.computeDistanceBetween(from, to) <= this.radius) {
      console.log('Radius', this.radius);
      console.log('Distance Between', google.maps.geometry.spherical.computeDistanceBetween(
        from, to
      ));
      return true;
    } else {
      return false;
    }
  }


  getAddress(latitude, longitude) {
    this.geoCoder.geocode({location: {lat: latitude, lng: longitude}}, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {

        if (results[0]) {
          //this.addMarker(latitude, longitude);
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
}
