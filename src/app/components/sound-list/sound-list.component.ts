import { Component, OnInit } from '@angular/core';

import { SoundState } from 'src/app/core/store/sounds/sound.state';
import { StoreService } from 'src/app/core/store/store.service';

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss']
})
export class SoundListComponent implements OnInit {

  soundState: SoundState;

  constructor(
    private readonly store: StoreService
  ) {}

  ngOnInit() {
    this.soundState = this.store.get(SoundState);
  }
}
