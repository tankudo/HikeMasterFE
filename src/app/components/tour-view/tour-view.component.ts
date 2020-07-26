import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-tour-view',
  templateUrl: './tour-view.component.html',
  styleUrls: ['./tour-view.component.scss']
})
export class TourViewComponent implements OnInit {
  lat = 40.730610;
  lng = -73.935242;
  zoom = 9;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  j = 0;

  constructor() {
  }

  ngOnInit(): void {


  }

}
