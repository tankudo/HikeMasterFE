import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideMasterComponent } from './hide-master.component';

describe('HideMasterComponent', () => {
  let component: HideMasterComponent;
  let fixture: ComponentFixture<HideMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
