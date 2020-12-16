import { TestBed } from '@angular/core/testing';

import { SapFuseService } from './sap-fuse.service';

describe('SapFuseService', () => {
  let service: SapFuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapFuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
