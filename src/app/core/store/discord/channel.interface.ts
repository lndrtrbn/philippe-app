import { Person } from './person.interface';

export interface Channel {
  id: string;
  name: string;
  people: Person[];
}
