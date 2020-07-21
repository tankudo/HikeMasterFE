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
  form: FormControl;
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
        title: ['assdfsddcasd', 'asscsadc', 'dfdpsdfv'],
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
      this.form.get('fullName').setValue(this.inputUser.fullName);
      this.form.get('email').setValue(this.inputUser.email);
      this.form.get('userName').setValue(this.inputUser.userName);
      this.form.get('title').setValue(this.inputUser.title);
      this.form.get('text').setValue(this.inputUser.text);
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
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.user = user;
    /*modalRef.result.then(() => {
      this.deleteUser(u);
    }).catch(() => {});*/
  }

  openModifyModal(user: User): void {
    const modalRef = this.modalService.open(ModifyComponent);
    modalRef.componentInstance.user = user;
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
