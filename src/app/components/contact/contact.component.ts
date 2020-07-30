import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces/user";
import {Contact} from "../../interfaces/contact";
import {AddTour} from "../../interfaces/add-tour";
import {AddTourService} from "../../services/add-tour.service";
import {Router} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Comment} from "../../interfaces/comment";
import {DeleteModalComponent} from "../comment/delete-modal/delete-modal.component";
import {concat} from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  contact: Contact;
  constructor(private contactService:ContactService, private router: Router) {
  }

  ngOnInit(): void {
  }


  addContact(a: Contact) {
    this.contactService.addContact(a).subscribe(() => {

        this.contactService.addContact(this.contact);
        console.log("Send");
       this.form.reset();

    });
  }





}
