import { BehaviorSubject, Observable } from 'rxjs';

import { State } from '../state.interface';
import { Bot } from './bot.interface';

export class BotState implements State {

  name = 'bot-state';

  // Infos about the bot
  private readonly _botInfo = new BehaviorSubject<Bot>(null);
  readonly botInfo: Observable<Bot> = this._botInfo.asObservable();

  /**
   * Change the bot informations
   * @param botInfo The new info about the bot
   */
  setBotInfo(botInfo: Bot) {
    this._botInfo.next(botInfo);
  }
}
