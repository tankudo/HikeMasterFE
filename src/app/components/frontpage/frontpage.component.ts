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
  tours: Tour[];
  isSearching = false;


  title = 'AngularGoogleMaps';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  public iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  radius = 5000;
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
          this.doSearchMarkers();
        });
      });
    });
  }
  radiusChange(event: any): void{
    console.log(event.target.value);
    this.radius = parseInt(event.target.value, 10);
    this.doSearchMarkers();
  }
  private setCurrentLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.doSearchMarkers();
      });
    }
  }


  doSearch(params: SearchRequest): void {
    this.isSearching = true;
    this.searchService.searchTours(params).subscribe(
      response => {
        this.tours = response;
        this.isSearching = false;
        setTimeout(() => {
          document.getElementById('tour-list').scrollIntoView(true);
        }, 100);
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
