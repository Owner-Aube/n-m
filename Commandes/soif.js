const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));
    let AllowedRole1 = message.guild.roles.find("name", "︱「🧴」bouteille d'eau")


    if(message.member.roles.find("name", "︱「💧」votre personnage a soif.", "︱「🧴」ʙᴏᴜᴛᴇɪʟʟᴇ ᴅ'ᴇᴀᴜ")){
        if(!AllowedRole1)
        message.channel.send('💧 Vous buvez de l\'eau. ')
        member.removeRole('681124748956270629')

      }else{

        message.channel.send('🩸 Vous n\'avez pas soif.')

    }


};

module.exports.help = {
    name: 'boire'
};
