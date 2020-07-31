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

  sendComment(comment: Comment, tourId: number): Observable<any> {
    return this.http.post(`${environment.apiEndpoint}/hike_route/${tourId}/messages`, comment, {withCredentials: true});
  }

  addComment(comment: Comment): void {
    const comments = [...this.comments].concat([comment]);
    this.commentsBehaviorSubject.next(comments);
  }

  modifyComment(comment: Comment): Observable<void> {
    return new Observable<void>(observer => {
      this.http.post(
        environment.apiEndpoint + `/hike_route/${comment.messageId}/alter_message`,
        comment,
        {withCredentials: true}
      ).subscribe(res => {
        const comments = [...this.comments].map(transformableComment => {
          if (transformableComment.messageId === comment.messageId) {
            transformableComment = comment;
          }
          return transformableComment;
        });
        this.commentsBehaviorSubject.next(comments);
        observer.next();
      });
    });
  }

  setComments(comments: Comment[]): void {
    this.commentsBehaviorSubject.next(comments);
  }

  fetchComments(tourId: number): void {
    this.http.get(environment.apiEndpoint + `/hike_route/${tourId}/messages`, {withCredentials: true}).subscribe((comments: Comment[]) => {
      this.setComments(comments);
    });
  }

  deleteComment(messageId: number): Observable<void> {
    return new Observable<void>(observer => {
      this.http.delete(
        `${environment.apiEndpoint}/hike_route/${messageId}/delete_message`,
        {withCredentials: true}
      ).subscribe(() => {
        observer.next();
      });
    });
  }
}
