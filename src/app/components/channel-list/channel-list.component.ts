import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DiscordChannel } from '@core/store/discord/discord.interface';
import { PhilippeStatus } from '@core/store/philippe/philippe.interface';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent {

  @Input() channels: DiscordChannel[];
  @Input() philippe: PhilippeStatus;

  @Output() channelChanged = new EventEmitter<DiscordChannel>();

  constructor() { }

  /**
   * Emits an event to tell to change Philippe channel
   * @param channelId The new channel for the bot
   */
  changeChannel(newChannel: DiscordChannel) {
    if (newChannel) {
      this.channelChanged.emit(newChannel);
    }
  }
}
