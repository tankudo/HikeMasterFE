import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../interfaces/comment';
import {UserLogin} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TourList} from '../../interfaces/tour-list';
import {DeleteComponent} from '../delete/delete.component';
import {CommentService} from '../../services/comment.service';
import {ModifyComponent} from '../modify/modify.component';
import {ModifyModalComponent} from './modify-modal/modify-modal.component';

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

  constructor(private commentService: CommentService, private http: HttpClient, private userService: UserService, private modalService: NgbModal) {
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
    return this.getUser !== undefined && comment.user && comment.user.userName === this.getUser.userName;
  }

  openDeleteModal(myComment: Comment): void {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.myComment = myComment;
    modalRef.result.then(() => {
      this.commentService.deleteComment(myComment);
    }).catch(() => {
    });
  }

  openModifyModal(myComment: Comment): void {
    const modalRef = this.modalService.open(ModifyModalComponent);
    modalRef.componentInstance.myComment = myComment;
    modalRef.result.then(comment => {
      comment.messageId = myComment.messageId;
      this.commentService.addComment(comment);
    }).catch(() => {
    });
  }
}
