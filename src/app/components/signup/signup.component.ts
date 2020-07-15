import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  @Input()
  signupUser: User;


  constructor(public activeModal: NgbActiveModal) {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      userName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    const u: User = {
      fullName: this.form.get('fullName').value,
      email: this.form.get('email').value,
      userName: this.form.get('userName').value,
      password: this.form.get('password').value
    };

  }
}
