import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../interfaces/comment';
import {UserLogin} from '../../interfaces/user';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-tour-view',
  templateUrl: './tour-view.component.html',
  styleUrls: ['./tour-view.component.scss']
})
export class TourViewComponent implements OnInit {
  lat = 47.162494;
  lng = 19.503304;
  zoom = 7;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  j = 0;
  form: FormGroup;
  tourId: number;
  tour: any;

  constructor(
    private userService: UserService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required]),
      date: new FormControl(null)
    });
  }

  get comments(): Comment[] {
    return this.commentService.comments;
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const tourId = +param.id;
      if (!isNaN(tourId)) {
        this.tourId = tourId;
        this.http.get(environment.apiEndpoint + `/hike_route/${tourId}`).subscribe(tour => {
          this.tour = tour;
        });
        this.commentService.fetchComments(tourId);
      }
    });
  }

  comment(): void {
    const comment: Comment = {
      text: this.form.get('text').value,
      date: new Date(),
      messageDate: new Date(),
      hikeMasterUser: this.userService.user.userName,
      user: {
        userName: this.userService.user.userName
      }
    };

    this.commentService.sendComment(comment, this.tourId).subscribe((response => {
      if (response.success) {
        this.commentService.addComment(comment);
        this.form.reset();
      }
    }), error => {
      // this.commentService.addComment(comment);
      // this.form.reset();
    });
  }

  get getUser(): UserLogin | undefined {
    return this.userService.user;
  }

}
