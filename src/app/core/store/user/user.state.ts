import { User } from './user.interface';

/**
 * State that contains the information about
 * the user that used philippe bot
 */
export class UserState {

  user: User;

  constructor() {
    this.user = {
      token: ''
    };
  }
}