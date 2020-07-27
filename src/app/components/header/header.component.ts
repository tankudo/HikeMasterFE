import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SignupComponent} from '../signup/signup.component';
import {UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {faEnvelope, faSignInAlt, faSignOutAlt, faTimes, faUser} from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  buttonLinkFrontpage: string;
  @Input()
  buttonLinkAdminTours: string;
  @Input()
  buttonLinkAdminImage: string;
  @Input()
  userLink: string;
  user: UserLogin;

  faTimes = faTimes;
  faBars=faBars;
  faTwitter=faTwitter;
  faGoogle=faGoogle;
  faLogin=faSignInAlt;
  faLogOut=faSignOutAlt;
  faUser=faUser;
  faMail=faEnvelope;

  isFixedNavbar;
  @HostBinding('class.navbar-opened') navbarOpened = false;


  constructor(private modalService: NgbModal, private userService: UserService) {
    this.userLink = '/user';
  }

  ngOnInit(): void {
    this.userService.userChange.subscribe(user => {
      this.user = user;
    });
  }

  get getUser(): UserLogin|undefined {
    return this.userService.user;
  }

  openLogin(): void {
    this.modalService.open(LoginComponent);
  }

  openSigin(): void {
    this.modalService.open(SignupComponent);
  }

  logout(): void{
    this.userService.logout();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

  isAdmin(): boolean {
    /*if(this.userService.getUsers().admin !== "true"){
      return true;
    }*/
    return false;
  }

}
