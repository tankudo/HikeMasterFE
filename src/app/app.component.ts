import {Component, OnInit} from '@angular/core';
import {LoginComponent} from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hikemaster';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    const modalRef = this.modalService.open(LoginComponent);
  }
}
