import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourViewComponent } from './tour-view.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('TourViewComponent', () => {
  let component: TourViewComponent;
  let fixture: ComponentFixture<TourViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourViewComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
