import { BehaviorSubject, Observable } from 'rxjs';

import { State } from '../state.interface';
import { Channel } from './channel.interface';

export class ChannelState implements State {

  name = 'channels-state';

  // All the channels on the server
  private readonly _channels = new BehaviorSubject<Channel[]>([]);
  readonly channels: Observable<Channel[]> = this._channels.asObservable();

  /**
   * Change the array of channels
   * @param channels The new array of channels
   */
  setChannels(channels: Channel[]) {
    this._channels.next(channels);
  }
}
