import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  addUser(user: User): Observable<any> {
    return this.http.post(environment.apiEndpoint, {u: user}, {withCredentials: true});
  }
}
