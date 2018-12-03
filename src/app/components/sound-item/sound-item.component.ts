import { Component, OnInit, Input } from '@angular/core';

import { Sound } from '../../core/store/sounds/sound.interface';

@Component({
  selector: 'app-sound-item',
  templateUrl: './sound-item.component.html',
  styleUrls: ['./sound-item.component.scss']
})
export class SoundItemComponent implements OnInit {

  @Input() sound: Sound;

  constructor() { }

  ngOnInit() {
  }
}
