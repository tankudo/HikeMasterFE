import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModifyComponent} from '../modify/modify.component';
import {DeleteComponent} from '../delete/delete.component';
import {FormControl} from '@angular/forms';
import {TourList} from '../../interfaces/tour-list';

@Component({
  selector: 'app-admin-tours',
  templateUrl: './admin-tours.component.html',
  styleUrls: ['./admin-tours.component.scss']
})
export class AdminToursComponent implements OnInit {
  form: FormControl;
  @Input()
  inputUser: User;
  @Output()
  submitUser: EventEmitter<User>;

  tourList: TourList[];

  constructor(private userService: UserService, private modalService: NgbModal) {
    this.tourList = [
      {
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },
      {
        id: 2,
        title: 'assdfsddcasd',
        text: 'klnvcksd vhnsdvcsdvsslkddvmsdc mdj',
      },
      {
        id: 3,
        title: 'assdfsddcasd',
        text: 'fvpfvpofvoifvnneoifvnqeoiv',
      },
      {
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },
      {
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },{
        id: 1,
        title: 'asscsadc',
        text: 'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc',
      },
    ];
    this.submitUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
    this.loadTour(this.tourList);
  }

  loadTour(tourList: TourList[]): void {
    /*this.userService.getTour().subscribe(tours => {
      this.tourList = tours;
    });*/
   this.tourList = tourList;
  }


  deleteTour(tourlist: TourList): void {
      this.userService.deleteTour(tourlist.id).subscribe(tours => {
        this.tourList = tours;
      });
    }

  openDeleteModal(tourList: TourList): void {
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.tourlist = tourList;
    /*modalRef.result.then(() => {
      this.deleteTour(t);
    }).catch(() => {});*/
  }

  openModifyModal(tourList: TourList): void {
    const modalRef = this.modalService.open(ModifyComponent);
    modalRef.componentInstance.tourList = tourList;
    /*
    modalRef.result.then(u => {
      u.id = user.id;
      this.userService.putUser(u).subscribe(users => {
        this.users = users;
      });
    }).catch(() => {});*/
  }

  submitForm(): void {
    const u: User = {
      fullName: this.form.get('fullName').value,
      email: this.form.get('email').value,
      userName: this.form.get('userName').value,
      title: this.form.get('title').value,
      text: this.form.get('text').value,
    };
    this.submitUser.emit(u);
  }

}
