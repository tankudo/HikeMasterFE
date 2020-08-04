import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../interfaces/tour';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})


export class MyMapComponent implements OnInit {

  @Input()
  tourMap: Tour;
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleFavorite(): void {
  //   this.tourMap.isFavorite = !this.tourMap.isFavorite;
   }
}
