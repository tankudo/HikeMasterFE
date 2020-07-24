import { Injectable } from '@angular/core';
import {User, UserLogin} from '../interfaces/user';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserLogin;

  userChange: BehaviorSubject<UserLogin> = new BehaviorSubject<UserLogin>({userName: null, password: ''});

  constructor(private http: HttpClient) {
    this.userChange.subscribe((value) => {
      this.user = value;
    });
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

 login(user: UserLogin): Observable<any>{
   return new Observable<any>(observer => {
     if (user.userName.length > 0) {
       observer.next({
         message: 'login successful'
       });
       console.log(this.user);
     } else {
       observer.error({
         message: 'login failed'
       });
     }
   });
 }

 setUser(user: UserLogin): void {
   this.userChange.next(user);
 }

  register(user: User): Observable<any> {
    return new Observable<any>((observer) => {
      observer.next({
          success: false,
          username: null,
          email: [
            'must be a well-formed email address'
          ],
          password: [
            'ILLEGAL_WHITESPACE',
            'ILLEGAL_USERNAME',
            'TOO_LONG'
          ],
          fullName: [
            'size must be between 5 and 30'
          ]
        }
      );
    });
     // return this.http.post(environment.apiEndpoint + 'registration', {u: user});
  }

  logout(): void {
    this.userChange.next({userName: null, password: ''});
  }
}
