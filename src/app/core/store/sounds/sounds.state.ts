import { Sound } from './sound.interface';

/**
 * State that contains the sounds that can be played
 */
export class SoundsState {

  sounds: Sound[];
  filteredSounds: Sound[];

  constructor() {
    this.sounds = [];
    this.filteredSounds = [];
  }
}