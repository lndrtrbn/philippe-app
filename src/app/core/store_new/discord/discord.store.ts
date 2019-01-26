import { Injectable } from '@angular/core';

import { Store } from '../store';
import { DiscordState } from './discord.state';

@Injectable({
  providedIn: 'root'
})
export class DiscordStore extends Store<DiscordState> {

  constructor() {
    super(new DiscordState());
  }
}