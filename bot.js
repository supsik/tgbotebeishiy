TelegramApi = require('node-telegram-bot-api')

const token = "6837522885:AAFqVLYVD-F53R04OFX6N5YxidV1s8qxHfs";
const testToken = "6936294673:AAHI0oR6pL9LEHRV-EjapVwRNnr4ywUwZFA";

const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg=> {
    const chat_id = msg.chat.chat_id;
    const text = msg.text;
    bot.sendMessage(chat_id, text)
})