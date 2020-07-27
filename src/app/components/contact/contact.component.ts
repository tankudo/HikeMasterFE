import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces/user";
import {Contact} from "../../interfaces/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    const contact: Contact = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      subject: this.form.get('subject').value,
      message: this.form.get('message').value
    };

  }
}
