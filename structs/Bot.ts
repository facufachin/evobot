import {
  ApplicationCommandDataResolvable,
  ChatInputCommandInteraction,
  Client,
  Collection,
  Events,
  Interaction,
  REST,
  Routes,
  Snowflake
} from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { Command } from "../interfaces/Command";
import { checkPermissions, PermissionResult } from "../utils/checkPermissions";
import { config } from "../utils/config";
import { i18n } from "../utils/i18n";
import { MissingPermissionsException } from "../utils/MissingPermissionsException";
import { MusicQueue } from "./MusicQueue";

export class Bot {
  public readonly prefix = config.PREFIX;
  public commands = new Collection<string, Command>();
  public slashCommands = new Array<ApplicationCommandDataResolvable>();
  public slashCommandsMap = new Collection<string, Command>();
  public cooldowns = new Collection<string, Collection<Snowflake, number>>();
  public queues = new Collection<Snowflake, MusicQueue>();

  public constructor(public readonly client: Client) {
    this.client.login(config.TOKEN);

    this.client.on("ready", () => {
      console.log(`${this.client.user!.username} ready!`);

      this.registerSlashCommands();
      this.startKeepAlive();
    });

    this.client.on("warn", (info) => console.log(info));
    this.client.on("error", console.error);

    this.onInteractionCreate();
  }

  private async registerSlashCommands() {
    // Remaining code for registering slash commands...
  }

  private async onInteractionCreate() {
    // Remaining code for handling interaction creation...
  }

  private startKeepAlive() {
    const intervalMinutes = 15; // Interval duration in minutes
    const intervalMilliseconds = intervalMinutes * 60 * 1000;

    setInterval(() => {
      this.sendKeepAliveRequest();
    }, intervalMilliseconds);
  }

  private async sendKeepAliveRequest() {
    try {
      // Send a request to any Discord API endpoint to keep the bot connection alive
      await this.client.api.gateway.bot();

      console.log('Keep-alive request sent successfully.');
    } catch (error) {
      console.error('An error occurred while sending the keep-alive request:', error);
    }
  }
}
