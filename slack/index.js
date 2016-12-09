"use strict";
const SlackBot = require('slackbots');

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: process.env.SLACK_BOT_NAME
  });

bot.on('start', () => {
  const me = bot.self.id;
  const mention = new RegExp('\<\@' + me + '\>', 'i');

  bot.on('message', data => {
    if(data.type === 'message' && (data.text.match(mention) || data.channel.match(/^D/)) && !data.bot_id) {
      bot.postMessage(data.channel, data.text.replace(mention, ''));
    }
  });
});
