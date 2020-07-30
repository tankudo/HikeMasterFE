import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTourKmlFormComponent } from './new-tour-kml-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NewTourKmlFormComponent', () => {
  let component: NewTourKmlFormComponent;
  let fixture: ComponentFixture<NewTourKmlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTourKmlFormComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTourKmlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
