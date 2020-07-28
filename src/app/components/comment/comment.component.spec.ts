import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  const commentContainerSelector = '.comment';
  const userActionContainerSelector = '.user-action-container';
  const deleteCommentButtonSelector = '.delete-button';

  const querySelector = (componentFixture: ComponentFixture<CommentComponent>, selector: string): HTMLElement | null => {
    return componentFixture.debugElement.nativeElement.querySelector(selector);
  };

  const setFakeComment = (commentComponent: CommentComponent): void => {
    commentComponent.myComment = {
      text: 'test',
      date: new Date(),
      user: {
        userName: 'test'
      }
    };
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only render with filled comment', () => {
    expect(querySelector(fixture, commentContainerSelector)).toBeNull();
    setFakeComment(component);
    fixture.detectChanges();
    expect(querySelector(fixture, commentContainerSelector)).toBeInstanceOf(HTMLElement);
  });

  describe('action buttons', () => {
    beforeEach(() => {
      setFakeComment(component);
      fixture.detectChanges();
      expect(querySelector(fixture, commentContainerSelector)).toBeInstanceOf(HTMLElement);
    });

    it('should only render with user logged in', () => {
      expect(querySelector(fixture, userActionContainerSelector)).toBeNull();
      component.hasUser = () => true;
      fixture.detectChanges();
      expect(querySelector(fixture, userActionContainerSelector)).toBeInstanceOf(HTMLElement);
    });

    it('should pop a modal when delete-button pressed', () => {
      const onClickDeleteModalSpy = spyOn(component, 'openDeleteModal');
      component.hasUser = () => true;
      fixture.detectChanges();
      const deleteCommentButton = querySelector(fixture, deleteCommentButtonSelector);
      deleteCommentButton.click();
      expect(onClickDeleteModalSpy).toHaveBeenCalled();
    });
  });
});
