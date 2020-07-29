import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchRequest} from "../interfaces/search-request";
import {Observable} from "rxjs";
import {Tour} from "../interfaces/tour";
import {SearchResponse} from "../interfaces/search-response";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {AddTour} from "../interfaces/add-tour";
import {AddTourResponse} from "../interfaces/add-tour-response";

@Injectable({
  providedIn: 'root'
})
export class AddTourService {

  constructor(private http: HttpClient) { }

  addTours(params: AddTour): Observable<number> {

    return this.http.post<AddTourResponse>(
      environment.apiEndpoint + '/hike_route/upload',
      params,
      {withCredentials: true}
    )
      .pipe(map(tResp => tResp.id));

  }

}
