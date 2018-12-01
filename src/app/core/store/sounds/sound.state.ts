import { State } from '../state.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sound } from './sound.interface';

export class SoundState implements State {

  name = 'sounds-store';

  // All the sounds availabled
  private readonly _sounds = new BehaviorSubject<Sound[]>([]);
  readonly sounds: Observable<Sound[]> = this._sounds.asObservable();

  /**
   * Change the array of sounds to a new one
   * @param sounds The new array of sounds availabled
   */
  setSounds(sounds: Sound[]) {
    this._sounds.next(sounds);
  }
}
