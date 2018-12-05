import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/store/store.service';
import { SoundState } from 'src/app/core/store/sounds/sound.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  soundState: SoundState;

  constructor(
    private readonly store: StoreService
  ) { }

  ngOnInit() {
    this.soundState = this.store.get(SoundState);
  }

  /**
   * Update the search filtering value
   * @param value The new search value
   */
  search(value: string) {
    this.soundState.setSearch({ value });
  }
}
