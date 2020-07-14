import {Component, OnInit} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SignupComponent} from './components/signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hikemaster';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    const modalRef = this.modalService.open(LoginComponent);
  }
}
