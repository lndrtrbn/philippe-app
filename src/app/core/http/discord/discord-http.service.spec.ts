import { TestBed } from '@angular/core/testing';

import { DiscordHttpService } from './discord-http.service';

describe('DiscordHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscordHttpService = TestBed.get(DiscordHttpService);
    expect(service).toBeTruthy();
  });
});
