import { Component, Input } from '@angular/core';

import { DiscordChannel } from '@core/store/discord/discord.interface';
import { PhilippeStatus } from '@core/store/philippe/philippe.interface';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})
export class ChannelItemComponent {

  @Input() channel: DiscordChannel;
  @Input() philippe: PhilippeStatus;

  constructor() {}
}
