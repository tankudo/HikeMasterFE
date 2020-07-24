import {User} from './user';
import {TourList} from './tour-list';

export interface UsersResponse {
  success: boolean;
  user: User[];
}

export interface TourResponse {
  success: boolean;
  tour: TourList[];
}
