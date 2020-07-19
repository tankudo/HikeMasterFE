import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModifyComponent} from '../modify/modify.component';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Input()
  inputUser: User;

  users: User[];

  constructor(private userService: UserService,  private modalService: NgbModal) {
    this.users = [
      {
        id: 4,
        fullName: 'Külö Nóra',
        email: 'kulo-nora@progmatic.hu',
        userName: 'alksnsca',
        title: ['assdfsddcasd', 'asscsadc', 'dfdpsdfv', 'assasca'],
        text: ['fvpfvpofvoifvnneoifvnqeoiv', 'klnvcksd vhnsdvcsdvsslkddvmsdc mdj', 'vjdfkvksdffoi mskfvnskfdv mnksndvksdfvdn.'],
      },
      {
        id: 4,
        fullName: 'Sikura Csaba',
        email: 'kulo-nora@progmatic.hu',
        userName: 'alksnsca',
        title: ['assdfsddcasd', 'asscsadc', 'dfdpsdfv', 'assasca'],
        text: ['fvpfvpofvoifvnneoifvnqeoiv', 'klnvcksd vhnsdvcsdvsslkddvmsdc mdj', 'vjdfkvksdffoi mskfvnskfdv mnksndvksdfvdn.'],
      },
    ];
  }

  ngOnInit(): void {
    /*this.loadUsers();*/
  }

  /*loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }*/
/*
  deleteUser(user: User): void {
    this.userService.deleteUser(user.userName).subscribe(users => {
      this.users = users;
    });
  }
*/
  openDeleteModal(): void {
    /*const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.user = u;
    modalRef.result.then(() => {
      this.deleteUser(u);
    }).catch(() => {});*/
    this.modalService.open(DeleteComponent);
  }

 openModifyModal(): void {
    /*const modalRef = this.modalService.open(ModifyComponent);
    modalRef.componentInstance.user = user;
    modalRef.result.then(u => {
      u.id = user.id;
      this.userService.putUser(u).subscribe(users => {
        this.users = users;
      });
    }).catch(() => {});*/
   this.modalService.open(ModifyComponent);
  }

}
