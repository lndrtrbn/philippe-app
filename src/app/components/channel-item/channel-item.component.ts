import { Component, OnInit, Input } from '@angular/core';

import { Channel } from 'src/app/core/store/discord/channel.interface';
import { Bot } from 'src/app/core/store/bot/bot.interface';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})
export class ChannelItemComponent implements OnInit {

  @Input() channel: Channel;
  @Input() botInfo: Bot;

  constructor() { }

  ngOnInit() {
  }
}
