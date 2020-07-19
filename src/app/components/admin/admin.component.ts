import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModifyComponent} from '../modify/modify.component';
import {DeleteComponent} from '../delete/delete.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  table: FormControl;
  @Input()
  inputUser: User;
  @Input()
  buttonLink: string;
  @Output()
  submitUser: EventEmitter<User>;

  userArr: User[];
  users: User[];

  constructor(private userService: UserService, private modalService: NgbModal) {
    this.users = [];
    this.userArr = [
      {
        id: 4,
        fullName: 'Külö Nóra',
        email: 'kulo-nora@progmatic.hu',
        userName: 'alksnsca',
        title: ['1', 'asscsadc', '3'],
        text: ['1', 'klnvcksd vhnsdvcsdvsslkddvmsdc mdj klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd ' +
        'vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc ' +
        'klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc klnvcksd vhnsdvcsdvsslkddvmsdc', '3'],
      },
      {
        id: 4,
        fullName: 'Sikura Csaba',
        email: 'kulo-nora@progmatic.hu',
        userName: 'alksnsca',
        title: ['assdfsddcasd', 'asscsadc', 'dfdpsdfv',],
        text: ['fvpfvpofvoifvnneoifvnqeoiv', 'klnvcksd vhnsdvcsdvsslkddvmsdc mdj', 'vjdfkvksdffoi mskfvnskfdv mnksndvksdfvdn.'],
      },
      {
        id: 4,
        fullName: 'Aasa Nóra',
        email: 'kulo-nora@progmatic.hu',
        userName: 'alksnsca',
        title: ['assdfsddcasd'],
        text: ['fvpfvpofvoifvnneoifvnqeoiv'],
      },
    ];
    this.submitUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
    /*this.loadUsers();*/
    this.modifyUserArray(this.userArr);
    if (this.inputUser) {
      this.table.get('name').setValue(this.inputUser.fullName);
      this.table.get('email').setValue(this.inputUser.email);
      this.table.get('age').setValue(this.inputUser.userName);
      this.table.get('gender').setValue(this.inputUser.title);
      this.table.get('gender').setValue(this.inputUser.text);
    }
  }

  modifyUserArray(user: User[]): void {
    let splitUser: User;
    for (const newArr of user) {
      if (newArr.title.length !== newArr.text.length) {
        console.log('ERROR');
      } else if (newArr.title.length !== 1) {
        for (let i = 0; i < newArr.title.length; i++) {
          // for (const title in newArr.title) {
          splitUser = {
            id: newArr.id,
            fullName: newArr.fullName,
            email: newArr.email,
            userName: newArr.userName,
            title: [newArr.title[i]],
            text: [newArr.text[i]],
          };
          this.users.push(splitUser);
        }
      } else {
        this.users.push(newArr);
      }
    }
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
  openDeleteModal(user: User): void {
    /*const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.user = u;
    modalRef.result.then(() => {
      this.deleteUser(u);
    }).catch(() => {});*/
    this.modalService.open(DeleteComponent);
  }

  openModifyModal(user: User): void {
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

  /*submitForm() {
    const u: User = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      age: this.form.get('age').value,
      gender: this.form.get('gender').value,
    };
    this.submitUser.emit(u);
  }*/

}
