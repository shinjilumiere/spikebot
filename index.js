require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 's!hello') {
    msg.reply('Hello!');
  }
  else if(msg.content === 's!loop') {
    for (i=0; i<4; i++) {
      setTimeout(function() {
        console.info('Looping');
        repeatMessage(msg);
      }, 500);
    }
  }
});

function repeatMessage(msg) {
  msg.channel.send('looping');
}