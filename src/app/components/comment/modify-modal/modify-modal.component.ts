import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TourList} from '../../../interfaces/tour-list';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.scss']
})
export class ModifyModalComponent implements OnInit {
  form: FormGroup;
  @Input()
  comment: Comment;

  constructor(public activeModal: NgbActiveModal) {
    this.form = new FormGroup({
      text: new FormControl(null, Validators.required),
    });
  }
  ngOnInit(): void {
    if (this.comment) {
      this.form.get('text').setValue(this.comment.textContent);
    }
  }

  submitForm(): void {
    const myComment: { textContent: any } = {
      textContent: this.form.get('text').value
    };
    this.activeModal.close(myComment);
  }
}
