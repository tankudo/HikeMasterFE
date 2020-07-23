import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTourFormComponent } from './new-tour-form.component';

describe('NewTourFormComponent', () => {
  let component: NewTourFormComponent;
  let fixture: ComponentFixture<NewTourFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTourFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
