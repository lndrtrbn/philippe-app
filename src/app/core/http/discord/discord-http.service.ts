import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DiscordServer } from '@core/store/discord/discord.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscordHttpService {

  constructor() {}

  /**
   * Retrieves the information about the discord server
   * which Philippe is connected
   * @returns The discord server infos
   */
  getDiscordServerInfos(): Observable<DiscordServer> {
    // Should call an API there
    return of({
      id: 'blblbl',
      name: 'Retards Society',
      channels: [
        { id: '1', name: 'Channel 1', people: [] },
        { id: '2', name: 'Channel 2', people: [{ name: 'Jean Mich' }] },
        { id: '3', name: 'Channel 3', people: [{ name: 'Jacques' }, { name: 'J0si4nn3' }] },
        { id: '4', name: 'Channel 4', people: [{ name: 'DK v4d0R' }] }
      ]
    });
  }
}
