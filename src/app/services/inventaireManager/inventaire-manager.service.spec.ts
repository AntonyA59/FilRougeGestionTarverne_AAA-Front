import { TestBed } from '@angular/core/testing';

import { InventaireManagerService } from './inventaire-manager.service';

describe('InventaireManagerService', () => {
  let service: InventaireManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventaireManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
