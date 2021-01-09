import { TestBed } from '@angular/core/testing';

import { PracticalUnitServiceHandlerService } from './practical-unit-service-handler.service';

describe('PracticalUnitServiceHandlerService', () => {
  let service: PracticalUnitServiceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticalUnitServiceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
