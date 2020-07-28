import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourFormComponent } from './tour-form.component';
import {HttpClientModule} from '@angular/common/http';

describe('TourFormComponent', () => {
  let component: TourFormComponent;
  let fixture: ComponentFixture<TourFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourFormComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
