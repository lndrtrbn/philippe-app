import { Component, OnInit } from '@angular/core';

import { ComponentWithSub } from '@core/component-with-sub';
import { SoundsStore } from '@core/store/sounds/sounds.store';
import { SoundsState } from '@core/store/sounds/sounds.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ComponentWithSub implements OnInit {

  soundState: SoundsState;

  constructor(
    private readonly soundsStore: SoundsStore
  ) { super(); }

  ngOnInit() {
    this.subscriptions.push(
      this.soundsStore.state.subscribe(state => this.soundState = state)
    );
  }

  /**
   * Update the search filtering value
   * @param value The new search value
   */
  search(value: string) {
    this.soundsStore.searchSounds(value);
  }
}
