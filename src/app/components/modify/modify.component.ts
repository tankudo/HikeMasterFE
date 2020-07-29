import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../interfaces/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {TourMap} from '../../interfaces/tour-map';
import {TourList} from '../../interfaces/tour-list';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  form: FormGroup;
  @Input()
  tourList: TourList;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    if (this.tourList) {
      this.form.get('title').setValue(this.tourList.title);
      this.form.get('text').setValue(this.tourList.text);
    }
  }

  submitForm(): void {
    const t: TourList = {
      title: this.form.get('title').value,
      text: this.form.get('text').value,
    };
    this.activeModal.close(t);
  }

}
