import Botkit from 'botkit';

export function bot_init(){
    const slack_controller = Botkit.slackbot({
        clientId: process.env.SLACK_CLIENT_ID,
        clientSecret: process.env.SLACK_CLIENT_SECRET,
        scopes: ['bot'],
        require_delivery: true
    });

    const slack_bot = slack_controller.spawn({
        token: process.env.BOT_OAUTH_TOKEN
    });

    slack_bot.startRTM((err, bot, payload) => {
        if (err) {
            throw new Error(err);
        }
        slack_controller.log('Connection estabilished');
        console.log(bot);
        console.log(payload);
    });

    return {
        bot: slack_bot,
        controller: slack_controller
    };
}