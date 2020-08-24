import { TestBed } from '@angular/core/testing';

import { AddTourBusService } from './add-tour-bus-service.service';

describe('AddTourBusServiceService', () => {
  let service: AddTourBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTourBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
