import { TestBed } from '@angular/core/testing';

import { GoogleMapMarkersService } from './google-map-markers.service';

describe('GoogleMapMarkersService', () => {
  let service: GoogleMapMarkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMapMarkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
