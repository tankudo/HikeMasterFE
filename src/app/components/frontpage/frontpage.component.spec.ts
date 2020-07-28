import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageComponent } from './frontpage.component';
import {MapsAPILoader} from '@agm/core';


describe('FrontpageComponent', () => {
  let component: FrontpageComponent;
  let fixture: ComponentFixture<FrontpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontpageComponent ],
      providers: [
      {
        provide: MapsAPILoader,
        useValue: {
          load: jest.fn().mockReturnValue(new Promise(resolve => resolve(true)))
        }
      }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
