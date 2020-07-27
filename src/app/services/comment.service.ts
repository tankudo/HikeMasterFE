import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const COMMENT_KEY = 'comment';
import {Comment} from '../interfaces/comment';
import {UserLogin} from '../interfaces/user';

@Injectable({
  providedIn: 'root'

})

export class CommentService {
  comment: Comment;
  commentChange: BehaviorSubject<Comment> = new BehaviorSubject<Comment>({text: '', date: null});
  commentsBehaviorSubject: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);
  comments: Comment[];

  constructor(private http: HttpClient) {
    this.commentChange.subscribe((comment) => {
      this.comment = comment;
    });

    this.commentsBehaviorSubject.subscribe((comments) => {
      this.comments = comments;
    });
  }

  sendComment(comment: Comment): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'hikeId/messages', {
      text: comment.text,
    });
  }

  setComment(comment: Comment): void {
    this.commentChange.next(comment);
  }

  setComments(comments: Comment[]): void {
    this.commentsBehaviorSubject.next(comments);
  }

  fetchComments(): void {
    new Observable<Comment[]>((observer) => {
      observer.next([{
          text: 'Some quick example',
          date: new Date(),
          user: {
            userID: 1,
            fullName: 'Mézga Kriszta',
            userName: 'Mézga Kriszta',
            email: 'string',
            password: 'string',
            isDeactivated: false,
            notification: 'string',
          }
        }, {
          text: 'Some quick',
          date: new Date(),
          user: {
            userID: 1,
            fullName: 'Mézga Aladár',
            userName: 'Mézga Aladár',
            email: 'string',
            password: 'string',
            isDeactivated: false,
            notification: 'string',
          }
        }, {
          text: 'Some quick',
          date: new Date(),
          user: {
            userID: 1,
            fullName: 'Csaba',
            userName: 'Csaba',
            email: 'string',
            password: 'string',
            isDeactivated: false,
            notification: 'string',
          }
        }]);
    }).subscribe(comments => {
      this.setComments(comments);
    });
  }
}
