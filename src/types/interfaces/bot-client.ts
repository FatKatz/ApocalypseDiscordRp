import {Client, Collection} from "discord.js";
import {BotSettings} from "./bot-settings";
import {Command} from "../../commands/command";

export interface BotClient extends Client {
    settings: BotSettings;
    commands: Collection<string, Command>;
}