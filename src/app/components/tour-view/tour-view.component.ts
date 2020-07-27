import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../interfaces/comment';
import {UserLogin} from '../../interfaces/user';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-tour-view',
  templateUrl: './tour-view.component.html',
  styleUrls: ['./tour-view.component.scss']
})
export class TourViewComponent implements OnInit {
  lat = 40.730610;
  lng = -73.935242;
  zoom = 9;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  j = 0;
  form: FormGroup;

  constructor(private userService: UserService, private commentService: CommentService) {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required]),
      date: new FormControl(null)
    });
    this.commentService.fetchComments();
  }

  get comments(): Comment[] {
    return this.commentService.comments;
  }

  ngOnInit(): void {


  }

  comment(): void {
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
