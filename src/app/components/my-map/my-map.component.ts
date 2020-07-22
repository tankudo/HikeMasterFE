import {Component, Input, OnInit} from '@angular/core';
import {TourMap} from '../../interfaces/tour-map';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})


export class MyMapComponent implements OnInit {

  @Input()
  tourMap: TourMap;
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleFavorite(): void {
    this.tourMap.isFavorite = !this.tourMap.isFavorite;
  }
}
