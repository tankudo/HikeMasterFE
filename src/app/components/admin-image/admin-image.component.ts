import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {TourMap} from '../../interfaces/tour-map';
import {TourList} from '../../interfaces/tour-list';

@Component({
  selector: 'app-admin-image',
  templateUrl: './admin-image.component.html',
  styleUrls: ['./admin-image.component.scss']
})
export class AdminImageComponent implements OnInit {
  tourList: TourList[];

  constructor(public adminService: AdminService) {
    this.tourList = [
      /*{
        id: 1,
        text: 'ggkdg',
        title: 'asscsadc',
        imgUrl: '../../../assets/img/test.01.jpg'
      },
      {
        id: 2,
        text: 'ttporet',
        title: 'nnkndfkd',
        imgUrl: 'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/03091106/Trees-768x511.jpg',
      }*/];
  }

  ngOnInit(): void {
    /*this.loadUsersImage(this.tourList);*/
    this.loadUsersImage();
  }

  loadUsersImage(): void {
    this.adminService.getImage().subscribe(tourList => {
      this.tourList = tourList;
    });
  }

  acceptImage(t: TourList): void {
    const index = this.tourList.indexOf(t);
    this.tourList.splice(index, 1);
    this.adminService.approveImage(t);
  }
}
