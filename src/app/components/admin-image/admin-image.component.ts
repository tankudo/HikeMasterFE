import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {TourMap} from '../../interfaces/tour-map';
import {TourList} from '../../interfaces/tour-list';
import {TourImage} from '../../interfaces/tour-image';

@Component({
  selector: 'app-admin-image',
  templateUrl: './admin-image.component.html',
  styleUrls: ['./admin-image.component.scss']
})
export class AdminImageComponent implements OnInit {
  tourImage: TourImage[];

  constructor(public adminService: AdminService) {
    this.tourImage = [
      /*{
        imageId: 1,
        imageUrl: '../../../assets/img/test.01.jpg'
      },
      {
        imageId: 2,
        imageUrl: 'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/03091106/Trees-768x511.jpg',
      }*/];
  }

  ngOnInit(): void {
    /*this.loadTourImage(this.tourImage);*/
    this.loadTourImage();
  }

  loadTourImage(): void {
    this.adminService.getImage().subscribe(tourImage => {
      this.tourImage = tourImage;
    });
  }

  acceptImage(t: TourImage): void {
    const index = this.tourImage.indexOf(t);
    this.tourImage.splice(index, 1);
    this.adminService.approveImage(t);
  }
}
