import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SignupComponent} from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLogin(): void {
    const modalRef = this.modalService.open(LoginComponent);
  }

  openSigin(): void{
    const modalRef = this.modalService.open(SignupComponent);
  }
}
