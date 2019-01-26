import { TestBed } from '@angular/core/testing';

import { SoundsHttpService } from './sounds-http.service';

describe('SoundsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoundsHttpService = TestBed.get(SoundsHttpService);
    expect(service).toBeTruthy();
  });
});
