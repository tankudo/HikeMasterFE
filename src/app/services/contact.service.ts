import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddTour} from "../interfaces/add-tour";
import {Observable} from "rxjs";
import {AddTourResponse} from "../interfaces/add-tour-response";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Contact} from "../interfaces/contact";
import {ContactResponse} from "../interfaces/contact-response";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }


  addContact(params: Contact): Observable<any> {
    return this.http.post<ContactResponse>(
      environment.apiEndpoint + '',
      params,
      {withCredentials: true}
    )
      .pipe(map(tResp => tResp));
  }
}
