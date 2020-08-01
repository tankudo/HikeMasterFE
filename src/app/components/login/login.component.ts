import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    const user: UserLogin = {
      userName: this.form.get('userName').value,
      password: this.form.get('password').value
    };
   // console.log(JSON.stringify(user));
    this.userService.login(user).subscribe((response) => {
      if (response.response === 'success') {
        this.userService.setUser(user);
        this.activeModal.dismiss();
      } else{
        if (Array.isArray(response.email)) {
          this.form.get('email').setErrors({email: true});
        }
      }
    });
  }
}
