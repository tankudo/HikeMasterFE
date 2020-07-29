import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../interfaces/comment';
import {UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  form: FormGroup;
  date: Date;
  @Input()
  myComment: Comment;

  constructor(private userService: UserService, private modalService: NgbModal) {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required]),
      date: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  get getUser(): UserLogin | undefined {
    return this.userService.user;
  }

  hasUser(comment): boolean {
    return this.getUser !== undefined && comment.user.userName === this.getUser.userName;
  }

  openDeleteModal(myComment: Comment): void {
    this.modalService.open(DeleteModalComponent);
  }


}
