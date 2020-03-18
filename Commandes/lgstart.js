const Discord = require('discord.js');

module.exports.run = (bot,message, args) => {


    let lgstartembed = new Discord.RichEmbed()
        .setTitle('**__Host LG__**')
        .addField('**__Rejoindre la partie :__**', '[🐺] -> Faite .lgjoin pour rejoindre la partie !')
        .addField('**__Démmarrer la partie !__**', '[👑] l\'hôte doit executer la commande .lglaunch !')

    message.channel.send(lgstartembed)

    
let role = message.guild.roles.find(r => r.name == '🎫・Salle d\'attente')

if (!role) return message.channel.send(`**${message.author.username}**, role not found`)

message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))


};

module.exports.help = {
    name: "lgstart"
}