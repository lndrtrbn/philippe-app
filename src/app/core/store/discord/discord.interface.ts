export interface DiscordChannel {
  id: string;
  name: string;
  people: DiscordPerson[];
}

export interface DiscordPerson {
  name: string;
  picture?: string;
}

export interface DiscordServer {
  id: string;
  name: string;
  channels: DiscordChannel[];
}