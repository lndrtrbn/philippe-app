import { Component, OnInit } from '@angular/core';

import { SoundsStore } from '@core/store/sounds/sounds.store';

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss']
})
export class SoundListComponent implements OnInit {

  constructor(
    private readonly soundsStore: SoundsStore
  ) {}

  ngOnInit() {
  }
}
