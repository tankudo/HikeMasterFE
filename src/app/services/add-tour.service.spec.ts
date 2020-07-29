import { TestBed } from '@angular/core/testing';

import { AddTourService } from './add-tour.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddTourService', () => {
  let service: AddTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AddTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
