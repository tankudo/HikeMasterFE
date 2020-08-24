import { Injectable } from '@angular/core';
import {AddTour} from '../interfaces/add-tour';
import {AddTourFormRequest} from '../interfaces/add-tour-form-request';

@Injectable({
  providedIn: 'root'
})
export class AddTourBusService {

  private tourFormRequest: AddTourFormRequest;

  constructor() {
    this.tourFormRequest = {
      tourImg: null,
      tourKml: null,
      tourDetails: null
    };
  }

  setTourDetails(tourDetails: AddTour): void {
    this.tourFormRequest.tourDetails = tourDetails;
  }

  setTourKml(kmlFile: File): void {
    this.tourFormRequest.tourKml = kmlFile;
  }

  setTourImg(imgFile: File): void {
    this.tourFormRequest.tourImg = imgFile;
  }

  getTourFormRequest(): AddTourFormRequest {
    return this.tourFormRequest;
  }
}
