import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImageComponent } from './admin-image.component';
import {HttpClientModule} from '@angular/common/http';

describe('AdminImageComponent', () => {
  let component: AdminImageComponent;
  let fixture: ComponentFixture<AdminImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImageComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
