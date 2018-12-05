import { Component, OnInit } from '@angular/core';

import { SoundState } from 'src/app/core/store/sounds/sound.state';
import { StoreService } from 'src/app/core/store/store.service';
import { Sound } from 'src/app/core/store/sounds/sound.interface';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss']
})
export class SoundListComponent implements OnInit {

  soundState: SoundState;
  filteredSounds: Sound[];

  constructor(
    private readonly store: StoreService
  ) {}

  ngOnInit() {
    this.soundState = this.store.get(SoundState);

    // When the search changes... Update the array of sounds
    this.soundState.search.subscribe(async (search) => {
      const filter = search ? search.value : '';
      this.soundState.sounds.pipe(first()).subscribe(sounds => {
        this.filteredSounds = sounds.filter(sound => sound.name.toLowerCase().includes(filter.toLowerCase()));
      });
    });
  }
}
