import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces/user";
import {Tour} from "../../interfaces/tour";
import {AddTour} from "../../interfaces/add-tour";

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
      description: new FormControl(null, [Validators.required]),
      difficulty: new FormControl(null, [Validators.required]),
      tourType: new FormControl(null, [Validators.required]),
      routeType: new FormControl(null, [Validators.required]),
      rate: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  saveNewTour(): void {
    const addTour: AddTour = {
      title: this.form.get('title').value,
      description: this.form.get('description').value,
      difficulty: this.form.get('difficulty').value,
      tourType: this.form.get('tourType').value,
      routeType: this.form.get('routeType').value,
      rate: this.form.get('rate').value,
    };

  }

  addNewTour(addTour: AddTour): void {

  }
}
