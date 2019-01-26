import { DiscordServer } from './discord.interface';

/**
 * State that contains the information about the discord
 * server which the bot is connected to
 */
export class DiscordState {

  server: DiscordServer;

  constructor() {
    this.server = {
      id: '',
      name: '',
      channels: []
    }
  }
}