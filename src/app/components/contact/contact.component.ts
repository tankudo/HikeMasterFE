import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Contact} from '../../interfaces/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  contact: Contact;
  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  addContact(a: Contact): void {
    this.contactService.addContact(a).subscribe(() => {
        this.contactService.addContact(this.contact);
        this.form.reset();
    });
  }
}
