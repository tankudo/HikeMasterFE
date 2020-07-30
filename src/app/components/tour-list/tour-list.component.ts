import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../interfaces/tour';
import {SearchService} from '../../services/search.service';



@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})

export class TourListComponent implements OnInit {
  @Input()
  tours: Tour[];
  @Input()
  isSearching = false;

  constructor(private searchService: SearchService) {
    this.tours = [];
  }

  ngOnInit(): void {
  }


}


