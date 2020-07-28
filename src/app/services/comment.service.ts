import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

import {Comment} from '../interfaces/comment';

@Injectable({
  providedIn: 'root'

})

export class CommentService {
  comment: Comment;
  commentsBehaviorSubject: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);
  comments: Comment[];

  constructor(private http: HttpClient) {
    this.commentsBehaviorSubject.subscribe((comments) => {
      this.comments = comments;
    });
  }

  sendComment(comment: Comment): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'hikeId/messages', {
      text: comment.text,
    });
  }

  addComment(comment: Comment): void {
    const comments = [...this.comments].concat([comment]);
    this.commentsBehaviorSubject.next(comments);
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
            userName: 'Mézga Kriszta'
          }
        }, {
          text: 'Some quick',
          date: new Date(),
          user: {
            userName: 'S.Csaba'
          }
        }, {
          text: 'Some quick',
          date: new Date(),
          user: {
            userName: 'Csaba'
          }
        }]);
    }).subscribe(comments => {
      this.setComments(comments);
    });
  }
}
