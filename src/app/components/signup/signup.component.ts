import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';
import {ConfirmationComponent} from '../confirmation/confirmation.component';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  @Input()
  signupUser: User;
 constructor(public activeModal: NgbActiveModal, private userService: UserService, private router: Router, private modalService: NgbModal) {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
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
  openLogin(): void {
    this.modalService.open(ConfirmationComponent);
  }

// todo get info form backend

  addUser(u: User): void {
    this.userService.register(u).subscribe((response) => {
      if (response['error-infos'].includes('not-valid-email')) {
        this.form.get('email').setErrors({email: true});
      }
      if (response['error-infos'].includes('not-valid-name')) {
        this.form.get('userName').setErrors({required: true});
      }
    });
  }
}
