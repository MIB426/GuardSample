import { TestBed, async, inject } from '@angular/core/testing';

import { DeActivateGuard } from './de-activate.guard';

describe('DeActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeActivateGuard]
    });
  });

  it('should ...', inject([DeActivateGuard], (guard: DeActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
