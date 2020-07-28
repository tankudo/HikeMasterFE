import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  const getCommentContainer = (componentFixture: ComponentFixture<CommentComponent>): Element | null => {
    return componentFixture.debugElement.nativeElement.querySelector('.comment');
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

  it('should only render with comment text filled', () => {
    expect(getCommentContainer(fixture)).toBeNull();
    component.myComment = {
      text: 'test',
      date: new Date(),
      user: {
        userName: 'test'
      }
    };
    fixture.detectChanges();
    expect(getCommentContainer(fixture)).toBeInstanceOf(Element);
  });
});
