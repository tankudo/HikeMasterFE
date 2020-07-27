import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../interfaces/comment';
import {UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {TourMap} from '../../interfaces/tour-map';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  form: FormGroup;
  user: UserLogin;
  date: Date;
  @Input()
  myComment: Comment;

  constructor(private commentService: CommentService, private userService: UserService) {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required]),
      date: new FormControl(null)
    });

  }

  ngOnInit(): void {
  }

  comment(): void {
    console.log('new comment sent');
    const comment: Comment = {
      text: this.form.get('text').value,
      date: new Date()
    };
    console.log(JSON.stringify(comment));
    this.commentService.sendComment(comment).subscribe((response => {
      if (response.success) {
        this.commentService.setComment(comment);
      }
    }));
  }

  get getUser(): UserLogin | undefined {
    return this.userService.user;
  }

  get commentInfo(): Comment {
    return this.commentService.comment;
  }

}
