import { TestBed } from '@angular/core/testing';

import { StorageDetailsService } from './storage-details.service';

describe('StorageDetailsService', () => {
  let service: StorageDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
