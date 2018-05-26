import Botkit from 'botkit';

const slack_token = process.env.SLACK_TOKEN;
const slack_oauth = process.env.SLACK_OAUTH;

console.log(process.env);

export function bot_init(){
    const slack_controller = Botkit.slackbot({
        require_delivery: true
    });

    const slack_bot = slack_controller.spawn({
        token: slack_token
    });

    slack_bot.startRTM((err, bot, payload) => {
        if (err) {
            throw err;
        }
        slack_controller.log("Connection estabilished");
        slack_controller.log(bot);
        slack_controller.log(payload);
    });

    slack_controller.hears(['.*'], ['direct_message', 'direct_mention'], (bot, message) => {
        slack_controller.log('Slack message received');
        bot.reply(message, `I have received: ${message}`);
    });

    return {
        bot: slack_bot,
        controller: slack_controller
    };
}