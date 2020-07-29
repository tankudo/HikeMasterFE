import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourListComponent } from './tour-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TourListComponent', () => {
  let component: TourListComponent;
  let fixture: ComponentFixture<TourListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
