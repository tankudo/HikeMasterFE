import {Component, OnInit} from '@angular/core';
import {SearchRequest} from "../../interfaces/search-request";
import {AddTour} from "../../interfaces/add-tour";
import {Router} from "@angular/router";
import {AddTourService} from "../../services/add-tour.service";


@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent implements OnInit {

  savedTourId: number;

  constructor(private addTourService: AddTourService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addTours(a: AddTour) {
    this.addTourService.addTours(a).subscribe((tourId) => {
      /*
      if (response.success) {
        this.router.navigate(['/user']);
      }

       */
      this.savedTourId = tourId;
    });
  }
}
