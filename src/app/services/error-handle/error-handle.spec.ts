import { TestBed } from '@angular/core/testing';

import { ErrorHandle } from './error-handle';

describe('ErrorHandle', () => {
  let service: ErrorHandle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
