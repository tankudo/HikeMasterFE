import {Component, OnInit} from '@angular/core';
import {AddTourService} from '../../services/add-tour.service';
import {AddTourBusService} from '../../services/add-tour-bus.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent implements OnInit {

  savedTourId: number;

  constructor(
    private addTourService: AddTourService,
    private addTourBusServiceService: AddTourBusService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  createTour(): void {
    const currentTour = this.addTourBusServiceService.getTourFormRequest();
    this.addTourService.addTours(currentTour.tourDetails).subscribe(async (tourId) => {
      this.savedTourId = tourId;
      await this.addTourService.uploadKmlFile(
        currentTour.tourKml,
        tourId
      );
      await this.addTourService.uploadImgFile(
        currentTour.tourImg,
        tourId
      );
      await this.router.navigate([`/tour/${tourId}`]);
    });
  }
}
