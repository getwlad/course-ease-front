import { TestBed } from '@angular/core/testing';

import { RelatoryService } from './relatory.service';

describe('RelatoryService', () => {
  let service: RelatoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
