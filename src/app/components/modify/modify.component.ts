import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  @Input()
  user: User;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  /*modifyInfo($event: any): void{
  }*/

  modifyUser(u: User) {
    this.activeModal.close(u);
  }
}
