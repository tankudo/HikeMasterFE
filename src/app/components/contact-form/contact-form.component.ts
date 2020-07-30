import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../../interfaces/contact";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactModalComponent} from "../contact/contact-modal/contact-modal.component";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  @Output()
  add: EventEmitter<Contact>;

  constructor(private modalService: NgbModal) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
    this.add = new EventEmitter<Contact>();
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    const contact: Contact = {
      email: this.form.get('email').value,
      subject: this.form.get('subject').value,
      message: this.form.get('message').value
    };
    this.add.emit(contact);
    this.form.reset();
  }

  open(): void {
    const modalRef = this.modalService.open(ContactModalComponent);
    modalRef.componentInstance.name = 'World';
  }

}
