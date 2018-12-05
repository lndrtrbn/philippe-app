import { Component, OnInit } from '@angular/core';

import { DiscordState } from 'src/app/core/store/discord/discord.state';
import { StoreService } from 'src/app/core/store/store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  discordState: DiscordState;

  constructor(
    private readonly store: StoreService
  ) {}

  ngOnInit() {
    this.discordState = this.store.get(DiscordState);
  }
}
