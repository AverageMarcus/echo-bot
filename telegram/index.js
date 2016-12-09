"use strict";
const telegram = require('node-telegram-bot-api');
const bot = new telegram(process.env.TELEGRAM_TOKEN, { polling: true });

bot.on('message', message => { 
  const chatId = message.chat.id;

  bot.sendMessage(chatId, message.text);
});
