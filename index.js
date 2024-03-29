const telegramBot = require('node-telegram-bot-api');
const token = '5836064534:AAEb9wnXF7siCEy2odDBqLubx6on73S9rDQ';
const ytdl = require('ytdl-core');
const fs = require('fs');
const { url } = require('inspector');

const bot = new telegramBot(token, {polling: true});

bot.on('message', async(msg) => {
    const chatId = msg.chat.id;
    const full_name = msg.from.first_name;
    if(msg.text == '/start'){
        const userName = msg.from.username;
    bot.sendMessage(chatId, `Assalomu aleykum <b>${full_name}</b>, bizga murojat qilganingizdan xursandmiz, biz bilan qoling `, {
        parse_mode: 'HTML'
    })

    }

    else if(ytdl.validateURL(msg.text)){
        async function botSendVideo(){
          await  bot.sendMessage(chatId, "Video link qabul qilindi, iltimos kuting")
            let info = await ytdl.getInfo(msg.text);
            let video_title =  info.videoDetails.title;

            ytdl(msg.text)
            .pipe(fs.createWriteStream(`videos/${video_title}.mp4`))
           await bot.sendVideo(chatId, `videos/${video_title}.mp4`)
        }

        botSendVideo();
    }
});
    
