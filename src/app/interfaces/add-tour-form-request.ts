import {AddTour} from './add-tour';

export interface AddTourFormRequest {
  tourDetails: AddTour;
  tourImg: File;
  tourKml: File;
}
