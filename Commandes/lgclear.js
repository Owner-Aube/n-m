const Discord = require('discord.js');

module.exports.run = (bot,message, args) => {


    
let role = message.guild.roles.find(r => r.name == '🎫・Salle d\'attente')

if (!role) return message.channel.send(`**${message.author.username}**, role not found`)

message.guild.members.filter(m => !m.user.bot).forEach(member => member.removeRole(role))


};

module.exports.help = {
    name: "lgclear"
}