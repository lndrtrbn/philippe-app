import { Injectable } from '@angular/core';

import { Store } from '../store';
import { SoundsState } from './sounds.state';

@Injectable({
  providedIn: 'root'
})
export class SoundsStore extends Store<SoundsState> {

  constructor() {
    super(new SoundsState());
  }

  /**
   * Update the value of the search value in the state
   * @param searchValue The value of the search
   */
  searchSounds(searchValue: string) {
    this.setState({
      ...this.currentState,
      filteredSounds: this.currentState.sounds
        .filter(sound => sound.name.toLowerCase().includes(searchValue.toLowerCase()))
    });
  }
}