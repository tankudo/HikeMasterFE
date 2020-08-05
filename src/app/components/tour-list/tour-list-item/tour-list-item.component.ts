import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../../interfaces/tour';

@Component({
  selector: 'app-tour-list-item',
  templateUrl: './tour-list-item.component.html',
  styleUrls: ['./tour-list-item.component.scss']
})
export class TourListItemComponent implements OnInit {
  @Input()
  tour: Tour;

  constructor() {
  }

  ngOnInit(): void {
  }

  get hasPicture(): boolean {
    return this.tour &&
      this.tour.pictureUrlList &&
      this.tour.pictureUrlList.length > 0 &&
      this.tour.pictureUrlList[0].pictureUrl.length > 0;
  }
}
