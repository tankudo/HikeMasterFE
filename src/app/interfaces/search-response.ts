import {Tour} from './tour';

export interface SearchResponse {
  success: boolean;
  tours: Tour[];
}
