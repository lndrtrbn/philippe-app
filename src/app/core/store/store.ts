import { Observable, BehaviorSubject } from 'rxjs';

/**
 * Generic class for representing a store
 * The generic type T represents the type of the state stored
 */
export class Store<T> {
  state: Observable<T>;
  private _state: BehaviorSubject<T>;

  protected constructor (initialState: T) {
    this._state = new BehaviorSubject(initialState);
    this.state = this._state.asObservable();
  }

  /**
   * Return the current value of the state
   * @returns The current value of the state
   */
  get currentState(): T {
    return this._state.getValue();
  }

  /**
   * Update the value of the state
   * @param nextState The new value of the state
   */
  setState(nextState: T) {
    this._state.next(nextState);
  }
}