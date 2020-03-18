const Discord = require('discord.js');

module.exports.run = (bot,message, args) => {


    
let voteZ = message.mentions.users.first

message.channel.send(`**__Vous avez votez pour ${voteZ} !__**`)


};

module.exports.help = {
    name: "lgvote"
}