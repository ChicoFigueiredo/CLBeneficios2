import { TestBed, inject } from '@angular/core/testing';

import { ClbenServiceService } from './clben-service.service';

describe('ClbenServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClbenServiceService]
    });
  });

  it('should be created', inject([ClbenServiceService], (service: ClbenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
