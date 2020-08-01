import {Component, OnInit} from '@angular/core';
import {AddTour} from '../../interfaces/add-tour';
import {Router} from '@angular/router';
import {AddTourService} from '../../services/add-tour.service';


@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent implements OnInit {

  savedTourId: number;

  constructor(private addTourService: AddTourService) {
  }

  ngOnInit(): void {
  }

  addTours(a: AddTour): void {
    this.addTourService.addTours(a).subscribe((tourId) => {
      this.savedTourId = tourId;
    });
  }
}
