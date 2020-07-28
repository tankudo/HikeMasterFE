import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTourImgFormComponent } from './new-tour-img-form.component';

describe('NewTourImgFormComponent', () => {
  let component: NewTourImgFormComponent;
  let fixture: ComponentFixture<NewTourImgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTourImgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTourImgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
