import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TourList} from '../../interfaces/tour-list';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input()
  tourlist: TourList;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
