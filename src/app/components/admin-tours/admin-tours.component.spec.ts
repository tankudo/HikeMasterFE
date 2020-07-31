import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToursComponent } from './admin-tours.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdminToursComponent', () => {
  let component: AdminToursComponent;
  let fixture: ComponentFixture<AdminToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToursComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
