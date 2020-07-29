import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {TourMap} from '../interfaces/tour-map';
import {AdminTourResponse} from '../interfaces/admin-tour-response';
import {TourList} from '../interfaces/tour-list';

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
      { id: tourList.routeId, title: tourList.title, text: tourList.text },
      {withCredentials: true}
    );
  }

  putImage(tourList: TourList): Observable<TourList[]> {
    return this.http.put<AdminTourResponse>(
      `${environment.apiEndpoint}?id=${tourList.routeId}`,
      {withCredentials: true}
    ).pipe(map(uResp => uResp.hikeRoutes));
  }
}
