import { TestBed } from '@angular/core/testing';

import { PhilippeHttpService } from './philippe-http.service';

describe('PhilippeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhilippeHttpService = TestBed.get(PhilippeHttpService);
    expect(service).toBeTruthy();
  });
});
