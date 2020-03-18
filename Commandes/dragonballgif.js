const Discord = require('discord.js');
const answers = [
    "https://i.imgur.com/l7huHg9.gif",
    "https://i.imgur.com/UZHwzfp.gif?1",
    "https://i.imgur.com/DsuN9zp.gif",
    "https://i.imgur.com/7mhZ6d5.gif",
]

module.exports.run = (client, message, args) => {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    const zteamdragonballgifcommands = new Discord.RichEmbed()
        .setImage(answer)
    
    message.channel.send(zteamdragonballgifcommands)

    };

    module.exports.help = {
        name: 'dragonballgif'
    };