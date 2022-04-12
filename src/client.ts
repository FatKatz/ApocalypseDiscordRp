import {Client as DiscordClient, Collection} from 'discord.js';
import {Service} from 'typedi';
import {BotSettings} from "./types";
import {settings as configuration} from './config/config';
import {BotClient} from "./types/interfaces/bot-client";
import {Command} from "./commands/command";
import {Logger} from './utils/Logger';

@Service()
export class Client extends DiscordClient implements BotClient {
    public settings: BotSettings;

    public constructor() {
        console.log(`Logging in ..`);
        super(configuration.clientOptions || {});
        this.settings = configuration;
        this.settings.token = process.env.BOT_TOKEN;
        this.initialize().then(() => {
            console.log(`Logged in as ${this.user.tag}`);
        });
    }

    private async initialize(): Promise<void> {
        try {
            await this.login(configuration.token);
        } catch (e) {
            Logger.error(`Could not initialize bot: ${e}`);
        }
    }

    commands: Collection<string, Command>;
}