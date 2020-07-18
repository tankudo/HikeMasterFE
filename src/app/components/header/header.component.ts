import {Component, Input, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SignupComponent} from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  buttonLink: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLogin(): void {
    this.modalService.open(LoginComponent);
  }

  openSigin(): void{
    this.modalService.open(SignupComponent);
  }


}
