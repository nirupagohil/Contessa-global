import { TestBed } from '@angular/core/testing';

import { ManTshirtService } from './man-tshirt.service';

describe('ManTshirtService', () => {
  let service: ManTshirtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManTshirtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
