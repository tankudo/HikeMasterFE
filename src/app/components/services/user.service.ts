import { Injectable } from '@angular/core';
import {User} from '../../interfaces/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(/*private http: HttpClient*/) {
  }

  /*deleteUser(userName: string): Observable<User[]> {
    return this.http.delete<UsersResponse>(
      `${environment.apiEndpoint}?id=${userName}`,
      { withCredentials: true }
    ).pipe(map( uResp => uResp.students ));
  }*/

  /*putUser(user: User): Observable<User[]> {
    return this.http.put<UsersResponse>(
      `${environment.apiEndpoint}?id=${user.id}`,
      { student: user },
      { withCredentials: true }
      ).pipe(map( uResp => uResp.students ));
  }*/
}
