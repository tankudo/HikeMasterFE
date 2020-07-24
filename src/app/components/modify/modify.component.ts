import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../interfaces/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
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
  @Output()
  submitUser: EventEmitter<TourList>;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    });
    this.submitUser = new EventEmitter<TourList>();
  }

  ngOnInit(): void {
    if (this.tourList) {
      // this.form.get('id').setValue(this.tourList.id);
      this.form.get('title').setValue(this.tourList.title);
      this.form.get('text').setValue(this.tourList.text);
    }
  }

  submitForm(): void {
    const t: TourList = {
      // id: this.form.get('id').value,
      title: this.form.get('title').value,
      text: this.form.get('text').value,
    };
    // TODO service call
    this.submitUser.emit(t);
    // this.userService.putTour(t);
  }

  /*modifyInfo($event: any): void{
  }*/

  modifyUser(u: User): void {
    this.activeModal.close(u);
  }
}
