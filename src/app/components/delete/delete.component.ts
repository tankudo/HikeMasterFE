import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input()
  user: User;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
