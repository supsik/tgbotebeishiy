TelegramApi = require('node-telegram-bot-api')

const token = "6837522885:AAFqVLYVD-F53R04OFX6N5YxidV1s8qxHfs";

const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg=> {
    const chat_id = msg.chat.chat_id;
    const text = msg.text;
    bot.sendMessage(chat_id, text)
})