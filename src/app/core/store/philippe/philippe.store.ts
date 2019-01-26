import { Injectable } from "@angular/core";

import { Store } from '../store';
import { PhilippeState } from './philippe.state';
import { DiscordChannel } from '../discord/discord.interface';

@Injectable({
  providedIn: 'root'
})
export class PhilippeStore extends Store<PhilippeState> {

  constructor() {
    super(new PhilippeState());
  }

  /**
   * Move philippe to a new channel
   * @param channel The channel that Philippe joins
   */
  moveToChannel(channel: DiscordChannel) {
    if (channel) {
      this.setState({
        ...this.currentState,
        status: {
          ...this.currentState.status,
          channelId: channel.id
        }
      });
    } 
  }
}