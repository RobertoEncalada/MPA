import { TestBed } from '@angular/core/testing';

import { NetflixService } from './netflix.service';

describe('RootService', () => {
  let service: NetflixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetflixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
