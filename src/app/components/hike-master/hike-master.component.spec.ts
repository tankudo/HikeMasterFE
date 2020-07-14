import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeMasterComponent } from './hide-master.component';

describe('HideMasterComponent', () => {
  let component: HikeMasterComponent;
  let fixture: ComponentFixture<HikeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
