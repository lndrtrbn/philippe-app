import { Injectable } from '@angular/core';

import { State } from './state.interface';
import { UserState } from './user/user.state';
import { SoundState } from './sounds/sound.state';
import { DiscordState } from './discord/discord.state';
import { BotState } from './bot/bot.state';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // All the states of the app
  private readonly states: State[] = [];

  /**
   * Creates all the states needed for the app
   */
  constructor() {
    // ADD YOUR STATES HERE
    this.states.push(
      new UserState(),
      new SoundState(),
      new DiscordState(),
      new BotState()
    );

    // =====================
    // === MOCK THE DATA ===
    // =====================
    this.get(UserState).setUser({
      token: 'ccsv'
    });
    this.get(SoundState).setSounds([
      { id: '1', name: 'Je sais où tu t\'cache' },
      { id: '2', name: 'TA GUEUUULE' },
      { id: '3', name: 'Je sais où tu t\'cache' },
      { id: '4', name: 'Viens ici sale enculé' },
      { id: '5', name: 'TA GUEUUULE' },
      { id: '6', name: 'Je sais où tu t\'cache' },
      { id: '7', name: 'TA GUEUUULE' },
      { id: '8', name: 'Je sais où tu t\'cache' },
      { id: '9', name: 'Viens ici sale enculé' },
      { id: '10', name: 'TA GUEUUULE' },
      { id: '11', name: 'Je sais où tu t\'cache' },
      { id: '12', name: 'TA GUEUUULE' },
      { id: '13', name: 'Je sais où tu t\'cache' },
      { id: '14', name: 'Viens ici sale enculé' },
      { id: '15', name: 'TA GUEUUULE' },
      { id: '16', name: 'Je sais où tu t\'cache' },
      { id: '17', name: 'TA GUEUUULE' },
      { id: '18', name: 'Je sais où tu t\'cache' },
      { id: '19', name: 'Viens ici sale enculé' },
      { id: '20', name: 'TA GUEUUULE' },
    ]);
    this.get(DiscordState).setServer({
      name: 'Retards Society',
      id: 'blblbl'
    });
    this.get(DiscordState).setChannels([
      { id: '1', name: 'Channel 1', people: [] },
      { id: '2', name: 'Channel 2', people: [{ name: 'Jean Mich' }] },
      { id: '3', name: 'Channel 3', people: [{ name: 'Jacques' }, { name: 'J0si4nn3' }] },
      { id: '4', name: 'Channel 4', people: [{ name: 'DK v4d0R' }] }
    ]);
    this.get(BotState).setBotInfo({
      channelId: '3',
      currentSoundId: null,
      speaking: false
    });
    // =====================
    // =====================
  }

  /**
   * Retrieves a state in the array of states by passing its type
   * @param c The state class to identify which state needed
   * @returns The state of type T or undefined if none
   */
  get<T extends State>(c: { new(): T; }): T {
    return this.states.find(state => state instanceof c) as T;
  }
}
