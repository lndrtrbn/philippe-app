import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './user.interface';
import { State } from '../state.interface';

export class UserState implements State {

  name = 'user-state';
  
  // The data of the current user
  private readonly _user = new BehaviorSubject<User>(null);
  readonly user: Observable<User> = this._user.asObservable();

  /**
   * Change the value of the user
   * @param user The new value of the user
   */
  setUser(user: User) {
    this._user.next(user);
  }
}
