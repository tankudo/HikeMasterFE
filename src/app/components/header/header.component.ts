import {Component, HostListener, Input, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SignupComponent} from '../signup/signup.component';
import {User, UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {UserPageComponent} from '../user-page/user-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  @Input()
  buttonLink: string;
  @Input()
  userLink: string;
  user: User;

  constructor(private modalService: NgbModal, private userService: UserService) {
    this.userLink = '/user';
  }

  ngOnInit(): void {
    this.userService.userChange.subscribe(user => {
     // this.user = user;
    });
  }

  get getUserName(): string {
    return this.userService.user !== undefined ? this.userService.user.userName : '';
  }

  openLogin(): void {
    this.modalService.open(LoginComponent);
  }

  openSigin(): void {
    this.modalService.open(SignupComponent);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    this.isSticky = window.pageYOffset >= 130;
  }

}
