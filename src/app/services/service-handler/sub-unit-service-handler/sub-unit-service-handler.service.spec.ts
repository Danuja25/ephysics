import { TestBed } from '@angular/core/testing';

import { SubUnitServiceHandlerService } from './sub-unit-service-handler.service';

describe('SubUnitServiceHandlerService', () => {
  let service: SubUnitServiceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubUnitServiceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
