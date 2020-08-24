import {Component, OnInit} from '@angular/core';
import {AddTourService} from '../../services/add-tour.service';
import {AddTourBusService} from '../../services/add-tour-bus.service';


@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent implements OnInit {

  savedTourId: number;

  constructor(
    private addTourService: AddTourService,
    private addTourBusServiceService: AddTourBusService
  ) {
  }

  ngOnInit(): void {
  }

  createTour(): void {
    const currentTour = this.addTourBusServiceService.getTourFormRequest();
    this.addTourService.addTours(currentTour.tourDetails).subscribe((tourId) => {
      this.savedTourId = tourId;
    });
  }
}
