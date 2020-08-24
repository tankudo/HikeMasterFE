import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddTour} from '../../interfaces/add-tour';
import {UserLogin} from '../../interfaces/user';
import {AddTourBusService} from '../../services/add-tour-bus.service';

@Component({
  selector: 'app-new-tour-form',
  templateUrl: './new-tour-form.component.html',
  styleUrls: ['./new-tour-form.component.scss']
})

export class NewTourFormComponent implements OnInit {

  form: FormGroup;
  isDisabled: boolean;


  constructor(private addTourBusServiceService: AddTourBusService) {

    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      difficulty: new FormControl(null, [Validators.required]),
      tourType: new FormControl(null, [Validators.required]),
      routeType: new FormControl(null, [Validators.required]),
      rate: new FormControl(null, [Validators.required])
    });

    this.form.valueChanges.subscribe(() => {
      const user: UserLogin = JSON.parse(localStorage.getItem('user'));
      const currentTour: AddTour = {
        title: this.form.get('title').value,
        description: this.form.get('description').value,
        difficulty: this.form.get('difficulty').value,
        tourType: this.form.get('tourType').value,
        routeType: this.form.get('routeType').value,
        rate: this.form.get('rate').value,
        createdBy: user.userName
      };

      this.addTourBusServiceService.setTourDetails(currentTour);
    });
  }

  ngOnInit(): void {
  }

}
