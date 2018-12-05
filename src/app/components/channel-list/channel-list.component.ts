import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';

import { Channel } from 'src/app/core/store/discord/channel.interface';
import { BotState } from 'src/app/core/store/bot/bot.state';
import { StoreService } from 'src/app/core/store/store.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  @Input() channels: Channel[];
  botState: BotState;

  constructor(
    private readonly store: StoreService
  ) { }

  ngOnInit() {
    this.botState = this.store.get(BotState);
  }

  /**
   * Change the channel which the bot should play sound
   * @param channelId The new channel for the bot
   */
  async changeChannel(channelId: string) {
    this.botState.botInfo.pipe(first()).subscribe(botInfo => {
      botInfo.channelId = channelId;
      this.botState.setBotInfo(botInfo);
    });
  }
}
