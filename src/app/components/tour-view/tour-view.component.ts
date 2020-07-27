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
  comments: Comment[];
  form: FormGroup;

  constructor(private userService: UserService, private commentService: CommentService) {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required]),
      date: new FormControl(null)
    });
    this.comments = new Array();
    this.comments.push( {
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
    });
    this.comments.push( {
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
    });
    this.comments.push( {
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
    });
    console.log('this.comments.length: ' + this.comments.length);
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
