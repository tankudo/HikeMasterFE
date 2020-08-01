import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {TourMap} from '../interfaces/tour-map';
import {AdminTourResponse} from '../interfaces/admin-tour-response';
import {TourList} from '../interfaces/tour-list';
import {TourImage} from '../interfaces/tour-image';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getTour(): Observable<TourList[]>{
    return this.http.get<TourList[]>(
      `${environment.apiEndpoint}/hike_routes`,
      {withCredentials: true}
    );
  }

  deleteTour(tourId: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.apiEndpoint}/hike_routes/${tourId}`,
      {withCredentials: true}
    );
  }

  putTour(tourList: TourList): Observable<TourList[]> {
    return this.http.put<TourList[]>(
      `${environment.apiEndpoint}/hike_routes`,
      { hikeRouteId: tourList.routeId, description: tourList.text, title: tourList.title  },
      {withCredentials: true}
    );
  }

  getImage(): Observable<TourImage[]> {
    return this.http.get<TourImage[]>(
      `${environment.apiEndpoint}/images`,
      {withCredentials: true}
    );
  }

  approveImage(tourimage: TourImage): Observable<TourImage[]> {
    return this.http.post<TourImage[]>(
      `${environment.apiEndpoint}/image/approve`,
      {pictureId: tourimage.urlId, approve: true},
      {withCredentials: true}
    );
  }
}
