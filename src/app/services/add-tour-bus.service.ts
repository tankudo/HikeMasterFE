import { Injectable } from '@angular/core';
import {AddTour} from '../interfaces/add-tour';
import {AddTourFormRequest} from '../interfaces/add-tour-form-request';

@Injectable({
  providedIn: 'root'
})
export class AddTourBusService {

  private tourDetails: AddTour;

  constructor() { }

  setTourDetails(tourDetails: AddTour): void {
    this.tourDetails = tourDetails;
    console.log(this.tourDetails);
  }

  getTourFormRequest(): AddTourFormRequest {
    return {
      tourDetails: this.tourDetails
    };
  }
}
