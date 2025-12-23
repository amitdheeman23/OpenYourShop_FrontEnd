import { TestBed } from '@angular/core/testing';

import { ShareData } from './share-data';

describe('ShareData', () => {
  let service: ShareData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
