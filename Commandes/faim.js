const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));
    let AllowedRole2 = message.guild.roles.find("name", "︱「🍔」Burger Hallal")


    if(message.member.roles.find("name", "︱「🥙」votre personnage a faim.", "︱「🍔」Burger Hallal.")){
        message.channel.send('🍔 Vous vous nourrisez. ')
        member.removeRole('681132904256241670')

      }else{

        message.channel.send('🍔Vous n\'avez pas faim.')

    }


};

module.exports.help = {
    name: 'manger'
};
