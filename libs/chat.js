export function chat_init(slack_controller){
    slack_controller.hears(['.*'], ['direct_message', 'direct_mention'], (bot, message) => {
        slack_controller.log('Slack message received');
        bot.reply(message, `I have received: ${message}`);
    });
}