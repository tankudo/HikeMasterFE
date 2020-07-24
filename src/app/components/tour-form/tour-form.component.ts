import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SearchRequest} from "../../interfaces/search-request";
import {SearchService} from "../../services/search.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss']
})
export class TourFormComponent implements OnInit {
  form: FormGroup;
  @Output()
  search: EventEmitter<SearchRequest>;

  constructor(private searchService: SearchService) {
    this.form = new FormGroup({
      tour_type: new FormControl(''),
      route_type: new FormControl(''),
      difficulty: new FormControl(''),
      tour_length: new FormControl(0),
      level_rise: new FormControl(0),
      rate: new FormControl(0)
    });
    this.search = new EventEmitter<SearchRequest>();
  }

  ngOnInit(): void {
  }

  submitForm() {
    const t: SearchRequest = {
      tour_type: this.form.get('tour_type').value,
      route_type: this.form.get('route_type').value,
      difficulty: this.form.get('difficulty').value,
      tour_length: this.form.get('tour_length').value,
      level_rise: this.form.get('level_rise').value,
      rate: this.form.get('rate').value,
    };
    this.search.emit(t);
  }


}
