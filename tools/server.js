import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { bot_init } from '../libs/bot';
import { chat_init } from "../libs/chat";

if (!process.env.PWD) {
    process.env.PWD = process.cwd();
}

dotenv.config({path: path.join(process.env.PWD, '.env')});

const app = express();
const port = process.env.PORT || 4205;

const bot_info = bot_init();
chat_init(bot_info.controller);

app.listen(port, function(req, res){
    console.info(`Started GreatScottsTM at port ${port}`);
});