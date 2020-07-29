import {Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import {Tour} from '../../interfaces/tour';
import {SearchService} from '../../services/search.service';
import {SearchRequest} from '../../interfaces/search-request';

import {MapsAPILoader} from '@agm/core';
import {GMapMarkers} from '../../interfaces/g-map-markers';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  private selectedFile: any;
  private http: any;
  tours: Tour[];
  isSearching = false;


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

  markers: GMapMarkers[] = [];
  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone, private searchService: SearchService) {
    this.tours = [];
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
          this.doSearchMarkers();
          // this.radiusDragEnd({coords: {lat: this.latitude, lng: this.longitude}});
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = (position.coords.latitude as number);
        this.longitude = (position.coords.longitude as number);
        // this.addMarker(this.latitude, this.longitude)

        this.radiusLat = this.latitude;
        this.radiusLong = this.longitude;

        this.zoom = 8;

        this.doSearchMarkers();

        // for (let i = 1 ; i < 50; i++){
          // this.markers.push(
            // {
              // lat: this.latitude + Math.random(),
              // lng: this.longitude + Math.random(),

             // label: `${i}`,

              // content: `Content no ${i}`,
              // isShown: false,

           //  }
         //  );
        // }
        // this.radiusDragEnd({coords: {lat: this.latitude, lng: this.longitude}});
      });
    }
  }


  // clickedMarker(label: string, index: number) {
   // console.log(`clicked the marker: ${label || index}`);
  // }

  // radiusDragEnd($event: any) {
  // console.log($event);
  // this.radiusLat = $event.coords.lat;
  //  this.radiusLong = $event.coords.lng;
  // this.showHideMarkers();
  // }
  // event(type, $event) {
  //  console.log(type, $event);
  //  this.radius = $event;
  //  this.showHideMarkers();
  // }

  // markerDragEnd($event: google.maps.MouseEvent) {
   // console.log($event);
    // this.latitude = $event.latLng.lat();
    // this.longitude = $event.latLng.lng();
    // this.getAddress(this.latitude, this.longitude);
  // }
  // showHideMarkers(): void { }
  // getDistanceBetween(lat1, long1, lat2, long2) {
  //  const from = new google.maps.LatLng(lat1, long1);
  //  const to = new google.maps.LatLng(lat2, long2);

  //  if (google.maps.geometry.spherical.computeDistanceBetween(from, to) <= this.radius) {
  //    console.log('Sugár', this.radius);
  //    console.log('Két pont közötti távolság', google.maps.geometry.spherical.computeDistanceBetween(
  //      from, to
  //    ));
  //    return true;
  //  } else {
  //    return false;
  //  }
  // }



  getAddress(latitude, longitude) {
    this.geoCoder.geocode({location: {lat: latitude, lng: longitude}}, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {

        if (results[0]) {
          // this.addMarker(latitude, longitude);
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
  doSearch(params: SearchRequest) {
    this.isSearching = true;
    this.searchService.searchTours(params).subscribe(
      response => {
        this.tours = response;
        this.isSearching = false;
      }
    );
  }

  doSearchMarkers(): void {
    this.searchService.searchMarkers(this.latitude, this.longitude, this.radius / 1000)
      .subscribe(markers => {
        this.markers = markers;
      });
  }
}
