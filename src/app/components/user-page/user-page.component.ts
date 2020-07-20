import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  active = 1;
  fakeUser: User;

  constructor() {
    this.fakeUser = {
      email: 'admin@asdf.com',
      fullName: 'Mr. Admin',
      userName: 'admin'
    };
  }

  ngOnInit(): void {
  }

}
