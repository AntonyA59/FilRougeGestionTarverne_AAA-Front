import { TestBed } from '@angular/core/testing';

import { CustomerManagerService } from './customer-management.service';

describe('CustomerManagerService', () => {
  let service: CustomerManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
