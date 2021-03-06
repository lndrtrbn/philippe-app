import { Component, OnInit } from '@angular/core';

import { ComponentWithSub } from '@core/component-with-sub';
import { DiscordStore } from '@core/store/discord/discord.store';
import { DiscordState } from '@core/store/discord/discord.state';
import { PhilippeStore } from '@core/store/philippe/philippe.store';
import { PhilippeState } from '@core/store/philippe/philippe.state';
import { DiscordChannel } from '@core/store/discord/discord.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends ComponentWithSub implements OnInit {

  discordState: DiscordState;
  philippeState: PhilippeState;

  constructor(
    private readonly discordStore: DiscordStore,
    private readonly philippeStore: PhilippeStore
  ) { super(); }

  ngOnInit() {
    this.subscriptions.push(
      this.discordStore.state.subscribe(state => this.discordState = state),
      this.philippeStore.state.subscribe(state => this.philippeState = state)
    );
  }

  /**
   * Move philippe in a new channel.
   * Called by an emitted event of the child component
   * @param newChannel The new channel for Philippe
   */
  changeChannel(newChannel: DiscordChannel) {
    if (newChannel) {
      this.philippeStore.moveToChannel(newChannel);
    }
  }
}
