import { TestBed } from '@angular/core/testing';

import { DirectoryEntryService } from './directory-entry.service';

describe('RangeService', () => {
  let service: DirectoryEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectoryEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
