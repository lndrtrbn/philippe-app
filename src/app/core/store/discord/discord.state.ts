import { BehaviorSubject, Observable } from 'rxjs';

import { State } from '../state.interface';
import { Channel } from './channel.interface';
import { Server } from './server.interface';

export class DiscordState implements State {

  name = 'discord-state';

  // Infos about the server
  private readonly _server = new BehaviorSubject<Server>(null);
  readonly server: Observable<Server> = this._server.asObservable();

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

  /**
   * Change the infos about the server
   * @param server The new infos about the server
   */
  setServer(server: Server) {
    this._server.next(server);
  }
}
