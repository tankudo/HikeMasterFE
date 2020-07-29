import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/user';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModifyComponent} from '../modify/modify.component';
import {DeleteComponent} from '../delete/delete.component';
import {FormControl} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {TourList} from '../../interfaces/tour-list';

@Component({
  selector: 'app-admin-tours',
  templateUrl: './admin-tours.component.html',
  styleUrls: ['./admin-tours.component.scss']
})
export class AdminToursComponent implements OnInit {
  form: FormControl;
  @Output()
  submitUser: EventEmitter<User>;

  tourLists: TourList[];

  constructor(private adminService: AdminService, private modalService: NgbModal) {
    this.tourLists = [];
    this.submitUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
    this.loadTours();
  }

  loadTours(): void {
    this.adminService.getTour().subscribe(tours => {
      this.tourLists = tours;
    });
  }

  deleteTour(tourList: TourList): void {
    this.adminService.deleteTour(tourList.routeId).subscribe(resp => {
      this.loadTours();
    });
  }

  openDeleteModal(t: TourList): void {
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.tourList = t;
    modalRef.result.then(() => {
      this.deleteTour(t);
    }).catch(() => {
    });
  }

  openModifyModal(t: TourList): void {
    console.log('1');
    const modalRef = this.modalService.open(ModifyComponent);
    modalRef.componentInstance.tourList = t;
    modalRef.result.then(tt => {
      tt.routeId = t.routeId;
      this.adminService.putTour(tt).subscribe(tourList => {
        this.tourLists = tourList;
      });
    }).catch(() => {});
  }

}
