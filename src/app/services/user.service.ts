import {Injectable} from '@angular/core';
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

  login(user: UserLogin): Observable<any> {
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
    return this.http.post(environment.apiEndpoint + '/registration', {
      username: user.userName,
      email: user.email,
      password: user.password,
      passwordConfirm: user.password,
      fullName: user.fullName
    });
  }

  logout(): void {
    this.userChange.next({userName: null, password: ''});
  }
}
