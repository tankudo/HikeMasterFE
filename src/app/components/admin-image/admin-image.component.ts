import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-admin-image',
  templateUrl: './admin-image.component.html',
  styleUrls: ['./admin-image.component.scss']
})
export class AdminImageComponent implements OnInit {
  @Input()
  inputUser: User;
  users: User[];

  constructor(public userService: UserService) {
    this.users = [
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
      }];
  }

  ngOnInit(): void {
    this.loadUsersImage(this.users);
  }

  loadUsersImage(u): void {
    /*this.userService.getUsers().subscribe(users => {
      this.users = users;
    });*/
  }

  accpetImage(u: User): void {
    const index = this.users.indexOf(u);
    this.users.splice(index, 1);
    this.userService.putUser(u);
  }
}
