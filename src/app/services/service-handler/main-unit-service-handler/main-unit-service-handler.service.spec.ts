import { TestBed } from '@angular/core/testing';

import { MainUnitServiceHandlerService } from './main-unit-service-handler.service';

describe('MainUnitServiceHandlerService', () => {
  let service: MainUnitServiceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainUnitServiceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
