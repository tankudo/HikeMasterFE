import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchRequest} from '../interfaces/search-request';
import {Observable} from 'rxjs';
import {Tour} from '../interfaces/tour';
import {SearchResponse} from '../interfaces/search-response';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {AddTour} from '../interfaces/add-tour';
import {AddTourResponse} from '../interfaces/add-tour-response';

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
      .pipe(
        map(tResp => tResp.id)
      );
  }

  getFileAsFormData = (file: File): FormData => {
    const fileFormData = new FormData();
    fileFormData.append('file', file, file.name);
    return fileFormData;
  }

  uploadFile = (file: FormData, url: string) => {
    return new Promise<void>((resolve, reject) => {
      this.http.post(url, file, { observe: 'response' }).subscribe(response => {
        if (response.status === 200) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  uploadKmlFile = async (kmlFile, tourId) => {
    const url = environment.apiEndpoint + '/kml/' + tourId + '/upload';
    await this.uploadFile(
      this.getFileAsFormData(kmlFile),
      url
    );
  }

  uploadImgFile = async (imgFile, tourId) => {
    const url = environment.apiEndpoint + '/image/' + tourId + '/upload';
    await this.uploadFile(
      this.getFileAsFormData(imgFile),
      url
    );
  }
}
