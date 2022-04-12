import {BotSettings} from "../types";
import {Intents} from "discord.js";

export const settings: BotSettings = {
    clientOptions: {
        intents:  [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
    },
    token: "",
    name: "12plus12",
    presence: {
        activity: {
            name: '!help for commands',
            type: 'PLAYING'
        }
    },
    prefix: '!',
    paths: {
        commands: 'src/commands',
        events: 'src/events'
    }
};