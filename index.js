const telegramBot = require('node-telegram-bot-api');
const token = '5836064534:AAEb9wnXF7siCEy2odDBqLubx6on73S9rDQ';
const ytdl = require('ytdl-core');
const fs = require('fs');

const bot = new telegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const full_name = msg.from.first_name;
    const userName = msg.from.username;
    bot.sendMessage(chatId, `Assalomu aleykum <b>${full_name}</b>, bizga murojat qilganingizdan xursandmiz, biz bilan qoling `, {
        parse_mode: 'HTML'
    });
});

const info = ytdl.getInfo(msg.text)
const video_title = info.videoDetails.title
console.log(video_title)
ytdl(msg.text)
 .pipe(fs.createWriteStream('Alisher Uzoqov'))
