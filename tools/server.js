import express from 'express';
import { bot_init } from '../libs/bot';

const app = express();
const port = process.env.PORT || 4205;

bot_init();

app.listen(port, function(req, res){
    console.info(`Started GreatScottsTM at port ${port}`);
});