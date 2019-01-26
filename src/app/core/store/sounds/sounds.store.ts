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
}