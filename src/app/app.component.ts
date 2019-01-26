import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { DiscordHttpService } from '@core/http/discord/discord-http.service';
import { DiscordStore } from '@core/store/discord/discord.store';
import { SoundsHttpService } from '@core/http/sounds/sounds-http.service';
import { SoundsStore } from '@core/store/sounds/sounds.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly discordHttp: DiscordHttpService,
    private readonly discordStore: DiscordStore,
    private readonly soundsHttp: SoundsHttpService,
    private readonly soundsStore: SoundsStore
  ) {}

  ngOnInit() {
    // Retrieves the informations about the discord server
    this.discordHttp.getDiscordServerInfos().pipe(first())
    .subscribe(discordServer => this.discordStore.setState({ server: discordServer }));

    // Retrieve the playable sounds
    this.soundsHttp.getAllSounds().pipe(first())
    .subscribe(sounds => this.soundsStore.setState({ sounds, filteredSounds: sounds }));
  }
}
