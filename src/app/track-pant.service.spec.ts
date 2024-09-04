import { TestBed } from '@angular/core/testing';

import { TrackPantService } from './track-pant.service';

describe('TrackPantService', () => {
  let service: TrackPantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackPantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
