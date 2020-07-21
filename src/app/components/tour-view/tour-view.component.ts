import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-tour-view',
  templateUrl: './tour-view.component.html',
  styleUrls: ['./tour-view.component.scss']
})
export class TourViewComponent implements OnInit {
  map: any;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  j=0;
  constructor() { }

  ngOnInit(): void {
    this.map = new google.maps.Map(document.getElementById('map-main'), {
      center: new google.maps.LatLng(56, 19),
      zoom: 10,
      mapTypeId: 'terrain'
    });

    let ctaLayer = new google.maps.KmlLayer({
      url: 'https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml',
      map: this.map
    });



  }

}
