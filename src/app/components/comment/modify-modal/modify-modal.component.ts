import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TourList} from '../../../interfaces/tour-list';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from 'src/app/interfaces/comment';
import {UserService} from '../../../services/user.service';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.scss']
})
export class ModifyModalComponent implements OnInit {
  form: FormGroup;
  @Input()
  comment: Comment;

  constructor(public activeModal: NgbActiveModal, private userService: UserService, private commentService: CommentService) {
    this.form = new FormGroup({
      text: new FormControl(null, Validators.required),
    });
  }
  ngOnInit(): void {
    if (this.comment) {
      this.form.get('text').setValue(this.comment.text);
    }
  }

  submitForm(): void {
    const myComment: Comment = {
      messageDate: new Date(),
      userName: this.userService.user.userName,
      text: this.form.get('text').value
    };
    this.commentService.modifyComment(myComment).subscribe(() => {
      this.activeModal.close();
    });
  }
}
