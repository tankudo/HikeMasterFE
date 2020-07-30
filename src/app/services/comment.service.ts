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
    return this.http.post(`${environment.apiEndpoint}/hike_route/${tourId}/messages`, {
      text: comment.text,
      date: comment.date
    }, {withCredentials: true});
  }

  addComment(comment: Comment): void {
    const comments = [...this.comments].concat([comment]);
    this.commentsBehaviorSubject.next(comments);
  }

  setComments(comments: Comment[]): void {
    this.commentsBehaviorSubject.next(comments);
  }

  fetchComments(tourId: number): void {
    this.http.get(environment.apiEndpoint + `/hike_route/${tourId}/messages`).subscribe((comments: Comment[]) => {
      this.setComments(comments);
    });
  }

  deleteComment(tourId: Comment): Observable<any> {
    return this.http.delete<any>(
      `${environment.apiEndpoint}/hike_routes/${tourId}`,
      {withCredentials: true}
    );
  }
}
