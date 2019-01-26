import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sound } from '@core/store/sounds/sound.interface';

@Injectable({
  providedIn: 'root'
})
export class SoundsHttpService {

  constructor() {}

  /**
   * Retrieves all the sounds that can be played
   * @returns All the playable sounds
   */
  getAllSounds(): Observable<Sound[]> {
    // Should call an API there
    return of([
      { id: '1', name: 'Je sais où tu t\'cache' },
      { id: '2', name: 'TA GUEUUULE' },
      { id: '3', name: 'Je sais où tu t\'cache' },
      { id: '4', name: 'Viens ici sale enculé' },
      { id: '5', name: 'TA GUEUUULE' },
      { id: '6', name: 'Je sais où tu t\'cache' },
      { id: '7', name: 'TA GUEUUULE' },
      { id: '8', name: 'Je sais où tu t\'cache' },
      { id: '9', name: 'Viens ici sale enculé' },
      { id: '10', name: 'TA GUEUUULE' },
      { id: '11', name: 'Je sais où tu t\'cache' },
      { id: '12', name: 'TA GUEUUULE' },
      { id: '13', name: 'Je sais où tu t\'cache' },
      { id: '14', name: 'Viens ici sale enculé' },
      { id: '15', name: 'TA GUEUUULE' },
      { id: '16', name: 'Je sais où tu t\'cache' },
      { id: '17', name: 'TA GUEUUULE' },
      { id: '18', name: 'Je sais où tu t\'cache' },
      { id: '19', name: 'Viens ici sale enculé' },
      { id: '20', name: 'TA GUEUUULE' },
    ]);
  }
}
