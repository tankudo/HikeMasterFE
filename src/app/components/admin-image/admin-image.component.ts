import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {TourList} from '../../interfaces/tour-list';

@Component({
  selector: 'app-admin-image',
  templateUrl: './admin-image.component.html',
  styleUrls: ['./admin-image.component.scss']
})
export class AdminImageComponent implements OnInit {
  tourlist: TourList[];

  constructor(public userService: UserService) {
    this.tourlist = [
      {
        id: 1,
        text: 'ggkdg',
        title: 'asscsadc',
        imgUrl: ':-)'
      },
      {
        id: 2,
        text: 'ttporet',
        title: 'nnkndfkd',
        imgUrl: '../../../assets/img/test.01.jpg',
      }];
  }

  ngOnInit(): void {
    this.loadUsersImage(this.tourlist);
  }

  loadUsersImage(t): void {
    this.userService.getTourImage().subscribe(tourList => {
      this.tourlist = tourList;
    });
  }

  accpetImage(t: TourList): void {
    const index = this.tourlist.indexOf(t);
    this.tourlist.splice(index, 1);
    /*this.userService.putUser(t);*/
  }
}
