import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyModalComponent } from './modify-modal.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

describe('ModifyModalComponent', () => {
  let component: ModifyModalComponent;
  let fixture: ComponentFixture<ModifyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyModalComponent ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
