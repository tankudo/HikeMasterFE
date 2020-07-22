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
    const user: User = {
      fullName: this.form.get('fullName').value,
      email: this.form.get('email').value,
      userName: this.form.get('userName').value,
      password: this.form.get('password').value
    };
    this.addUser(user);
  }

  openLogin(): void {
    this.modalService.open(ConfirmationComponent);
  }

// todo get info form backend

  addUser(user: User): void {
    this.userService.register(user).subscribe((response) => {
      console.log(response);
      if (response.success) {
        this.activeModal.dismiss();
        this.modalService.open(ConfirmationComponent);
      } else {
        if (Array.isArray(response.email)) {
          this.form.get('email').setErrors({email: true});
        }
        if (Array.isArray(response.username)) {
          this.form.get('userName').setErrors({required: true});
        }
        if (Array.isArray(response.password)) {
          this.form.get('password').setErrors({required: true});
        }
      }
    });
  }
}
