import {Tour} from './tour';

export interface SearchResponse {
  success: boolean;
  hikeRoutes: Tour[];
}
