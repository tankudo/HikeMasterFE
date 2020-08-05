import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../interfaces/tour';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input()
  tour: Tour;

  constructor() {
  }

  ngOnInit(): void {
  }

  get ratings(): string[] {
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
      if (this.tour && this.tour.rate && this.tour.rate >= i) {
        ratings.push('fa fa-star');
      } else {
        ratings.push('far fa-star');
      }
    }
    return ratings;
  }

}
