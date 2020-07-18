import {Component, OnInit, ViewChild} from '@angular/core';
import {MapAnchorPoint, MapInfoWindow, MapMarker} from '@angular/google-maps';

type MarkerObject = {
  option: google.maps.MarkerOptions,
  videoId: string,
  info: string
};
//declare var google: any;


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {


  //map:any;
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  //j=0;
  constructor() {
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  markers: MarkerObject[] = [{
    option: {title: 'Kékes', position: {lat: 47.87, lng: 20.00}},
    videoId: '',
    info: 'A Kékes Északi-középhegységben, a Mátrában található.\n' +
      '\n' +
      'Az 1014[2] méteres magasságával Magyarország legmagasabb hegye. Relatív magassága 774 méter. ' +
      'Szülőcsúcsától, az 1044 méter magas Jávorostól egy körülbelül 240 méter magasságban fekvő nyereg választja el Ajnácskő vasútállomása környékén.[2]'
  }, {
    option: {title: 'Hollókő', position: {lat: 	47.9962, lng: 	19.591819}},
    videoId: '',
    info: 'Hollókői útvonal.'
  }
  ];

  center = {lat: 47.162494	, lng: 	19.503304};
  zoom = 6;
  info: string = null;

  // tslint:disable-next-line:typedef
  openInfoWindow(markerElement: any, marker: MarkerObject) {
    this.info = marker.info;
    this.infoWindow.open(markerElement);
  }

  ngOnInit(): void {
  }

}
