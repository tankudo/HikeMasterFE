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

  constructor(private http: HttpClient) {
    this.commentChange.subscribe((comment) => {
      this.comment = comment;
      if (comment.date && comment.text.length > 0) {
        localStorage.setItem(COMMENT_KEY, JSON.stringify({
          user: comment.user.userName,
          text: comment.text,
          date: comment.date
        }));
      }
    });
  }

  sendComment(comment: Comment): Observable<any> {
    return this.http.put(environment.apiEndpoint + 'hikeId/messages', {
      text: comment.text,
    });
  }

  setComment(comment: Comment): void {
    this.commentChange.next(comment);
  }
}
