import { PhilippeStatus } from './philippe.interface';

/**
 * State that contains the information about what
 * Philippe is doing
 */
export class PhilippeState {

  status: PhilippeStatus;

  constructor() {
    this.status = {
      channelId: '',
      currentSoundId: '',
      speaking: false
    };
  }
}