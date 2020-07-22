import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../interfaces/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  form: FormGroup;
  @Input()
  user: User;
  @Output()
  submitUser: EventEmitter<User>;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      userName: new FormControl(null, [Validators.required]),
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    });
    this.submitUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
    if (this.user) {
      this.form.get('fullName').setValue(this.user.fullName);
      this.form.get('email').setValue(this.user.email);
      this.form.get('userName').setValue(this.user.userName);
      this.form.get('title').setValue(this.user.title);
      this.form.get('text').setValue(this.user.text);
    }
  }

  submitForm(): void {
    const u: User = {
      fullName: this.form.get('fullName').value,
      email: this.form.get('email').value,
      userName: this.form.get('userName').value,
      title: this.form.get('title').value,
      text: this.form.get('text').value,
    };
    // TODO service call
    this.userService.putUser(u);
  }

  /*modifyInfo($event: any): void{
  }*/

  modifyUser(u: User): void {
    this.activeModal.close(u);
  }
}
