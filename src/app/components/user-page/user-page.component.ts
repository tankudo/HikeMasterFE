import {Component, Input, OnInit} from '@angular/core';
import {TourMap} from '../../interfaces/tour-map';
import {Comment} from '../../interfaces/comment';
import {UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {CommentService} from '../../services/comment.service';
import {FormControl} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {HikeRoute} from '../../interfaces/hike-route';
import {SearchRequest} from '../../interfaces/search-request';
import {SearchService} from '../../services/search.service';
import {Tour} from '../../interfaces/tour';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  active = 1;
  tourMaps: Tour[];

  constructor(private userService: UserService, private searchService: SearchService) {
    // this.route.params.subscribe(param => {
    //   const tourId = +param.id;
    //   if (!isNaN(tourId)) {
    //     this.tourId = tourId;
    //     this.http.get(environment.apiEndpoint + `/hike_route/${tourId}`).subscribe((route: HikeRoute) => {
    //       this.tour = route.hikeRoute;
    //     });
    //     this.commentService.fetchComments(tourId);
    //   }
    // });
  }

  get favoriteMaps(): Tour[] {
    return [];
    // return this.tourMaps.filter(tourMap => tourMap.isFavorite);
  }

  ngOnInit(): void {
    this.searchTourByUserName();
  }

  get getUser(): UserLogin | undefined {
    return this.userService.user;
  }

  searchTourByUserName(): void {
    const user = {createdBy: this.getUser.userName};
    this.searchService.searchTours(user).subscribe((tours) => {
      this.tourMaps = tours;
    });
  }
}
