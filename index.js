const TelegramBot = require('node-telegram-bot-api');

const token = '521700668:AAEWq0Pf7YWq5WVYPQuBnWsNiM0TjGRcaqg';

const bot = new TelegramBot(token, {polling: true});
const request = require('request');

bot.on('message', (msg) => {
var Hola = "/hola";
if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
    bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
}
});
