import { Injectable } from '@angular/core';

import { State } from './state.interface';
import { UserState } from './user/user.state';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // All the states of the app
  private readonly states: State[] = [];

  /**
   * Creates all the states needed for the app
   */
  constructor() {
    // ADD YOUR STATES HERE
    this.states.push(new UserState());
  }

  /**
   * Retrieves a state in the array of states by passing its type
   * @param c The state class to identify which state needed
   * @returns The state of type T or undefined if none
   */
  get<T extends State>(c: { new(): T; }): T {
    return this.states.find(state => state instanceof c) as T;
  }
}
