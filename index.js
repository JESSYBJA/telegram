const TelegramBot = require('node-telegram-bot-api');

const token = '521700668:AAEWq0Pf7YWq5WVYPQuBnWsNiM0TjGRcaqg';

const bot = new TelegramBot(token, {polling: true});
const request = require('request');

bot.on('message', (msg) => {
var Hola = "/hola";

if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
    bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
}
else if  (msg.text.toString().toLowerCase().indexOf("r") > -1) {
    bot.sendMessage(msg.chat.id, "no te conozco  " );
}
else if  (msg.text.toString().toLowerCase().indexOf("z") > -1) {
    bot.sendMessage(msg.chat.id, "no te conozco  " );
}
else if  (msg.text.toString().toLowerCase().indexOf("h") > -1) {
    bot.sendMessage(msg.chat.id, "no te conozco  " );
}
else if  (msg.text.toString().toLowerCase().indexOf("k") > -1) {
    bot.sendMessage(msg.chat.id, "no te conozco  " );
}
else if  (msg.text.toString().toLowerCase().indexOf("y") > -1) {
    bot.sendMessage(msg.chat.id, "no te conozco  " );
}
else if (msg.text.toString().toLowerCase().indexOf("/unmeme") > -1) {
    bot.sendMessage(msg.chat.id, "http://generadordememesonline.com/media/created/kywbyb.jpg");
}
});

