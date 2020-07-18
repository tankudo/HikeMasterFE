import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UsersResponse} from '../interfaces/users-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(/*private http: HttpClient*/) {
  }
 /* getUsers(): Observable<User[]> {
    return this.http.get<UsersResponse>(
      environment.apiEndpoint,
      { withCredentials: true }
    )
      .pipe(map( uResp => uResp.user ));
  }

  deleteUser(userName: string): Observable<User[]> {
    return this.http.delete<UsersResponse>(
      `${environment.apiEndpoint}?id=${userName}`,
      { withCredentials: true }
    ).pipe(map( uResp => uResp.user ));
  }

  putUser(user: User): Observable<User[]> {
    return this.http.put<UsersResponse>(
      `${environment.apiEndpoint}?id=${user.id}`,
      { student: user },
      { withCredentials: true }
      ).pipe(map( uResp => uResp.user ));
  }*/
}
