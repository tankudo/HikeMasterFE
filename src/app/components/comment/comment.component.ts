import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../interfaces/comment';
import {UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  form: FormGroup;
  user: UserLogin;

  constructor(private commentService: CommentService, private userService: UserService) {
    this.form = new FormGroup({
      subject: new FormControl(null, [Validators.required]),
      text: new FormControl(null, [Validators.required]),
      date: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  comment(): void {
    const comment: Comment = {
      subject: this.form.get('subject').value,
      text: this.form.get('text').value,
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
}
