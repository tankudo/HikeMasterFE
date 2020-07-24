import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModifyComponent} from '../modify/modify.component';
import {DeleteComponent} from '../delete/delete.component';
import {FormControl} from '@angular/forms';
import {TourList} from '../../interfaces/tour-list';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
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
    ];
    this.submitUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
    this.loadUsers(this.tourList);
  }

  loadUsers(tourList: TourList[]): void {
    /*this.userService.getUsers().subscribe(users => {
      this.users = users;
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
      this.deleteUser(u);
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
