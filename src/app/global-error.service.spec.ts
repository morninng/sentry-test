import { TestBed, inject } from '@angular/core/testing';

import { GlobalErrorService } from './global-error.service';

describe('GlobalErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorService]
    });
  });

  it('should be created', inject([GlobalErrorService], (service: GlobalErrorService) => {
    expect(service).toBeTruthy();
  }));
});
