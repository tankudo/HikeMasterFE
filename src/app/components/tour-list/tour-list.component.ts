import { Component, OnInit } from '@angular/core';
import {Tour} from "../../interfaces/tour";
import {SearchService} from "../../services/search.service";
import {SearchRequest} from "../../interfaces/search-request";


@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {

  }

  doSearch(params: SearchRequest) {
    this.searchService.searchTours(params).subscribe(
      response => {

      }
    )
  }
}
