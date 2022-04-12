import 'reflect-metadata';

import {Container} from "typedi";
import {Client} from "./client";
import * as dotenv from "dotenv";

console.log('Starting bot...');

dotenv.config();

Container.get(Client);