import { TestBed } from '@angular/core/testing';

import { GrainsectionService } from './grainsection.service';

describe('GrainsectionService', () => {
  let service: GrainsectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrainsectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
