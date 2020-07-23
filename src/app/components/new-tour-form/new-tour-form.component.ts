import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-tour-form',
  templateUrl: './new-tour-form.component.html',
  styleUrls: ['./new-tour-form.component.scss']
})
export class NewTourFormComponent implements OnInit {

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {

  }

  saveNewTour() {

  }
}
