import { BehaviorSubject, Observable } from 'rxjs';

import { State } from '../state.interface';
import { Sound } from './sound.interface';
import { SoundSearch } from './sound-search.interface';

export class SoundState implements State {

  name = 'sounds-state';

  // All the sounds availabled
  private readonly _sounds = new BehaviorSubject<Sound[]>([]);
  readonly sounds: Observable<Sound[]> = this._sounds.asObservable();

  // The search value for filtering
  private readonly _search = new BehaviorSubject<SoundSearch>(null);
  readonly search: Observable<SoundSearch> = this._search.asObservable();

  /**
   * Change the array of sounds to a new one
   * @param sounds The new array of sounds availabled
   */
  setSounds(sounds: Sound[]) {
    this._sounds.next(sounds);
  }

  /**
   * Change the search for filtering
   * @param search The new search value
   */
  setSearch(search: SoundSearch) {
    this._search.next(search);
  }
}
