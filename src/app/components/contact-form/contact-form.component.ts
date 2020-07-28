import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../../interfaces/contact";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  @Output()
  add: EventEmitter<Contact>;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
    this.add=new EventEmitter<Contact>();
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
    this.add.emit(contact);
  }

}
