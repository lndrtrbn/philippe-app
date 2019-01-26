import { Injectable } from "@angular/core";

import { Store } from '../store';
import { PhilippeState } from './philippe.state';

@Injectable({
  providedIn: 'root'
})
export class PhilippeStore extends Store<PhilippeState> {

  constructor() {
    super(new PhilippeState());
  }
}