export interface Channel {
  id: string;
  name: string;
  people: Person[];
}

interface Person {
  name: string;
  picture?: string;
}
