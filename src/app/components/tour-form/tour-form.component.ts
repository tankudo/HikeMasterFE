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
      tourType: new FormControl(''),
      routeType: new FormControl(''),
      difficulty: new FormControl(''),
      tourLength: new FormControl(''),
      levelRise: new FormControl(''),
      rate: new FormControl()
    });
    this.search = new EventEmitter<SearchRequest>();
  }

  ngOnInit(): void {
  }

  submitForm() {
    const t: SearchRequest = {
      tourType: this.form.get('tourType').value,
      routeType: this.form.get('routeType').value,
      difficulty: this.form.get('difficulty').value,
      tourLength: this.form.get('tourLength').value,
      levelRise: this.form.get('levelRise').value,
      rate: this.form.get('rate').value,
    };
    this.search.emit(t);
  }


}
