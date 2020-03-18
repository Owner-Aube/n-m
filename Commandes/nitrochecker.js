const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let discordnitrocheckerdivision = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**__Division Nitro Checker__**")
    .addField("**__Verification de votre liste ...__**", ':x: Aucun Nitro n\'a été trouvé')
    .setFooter("Division -> https://discord.gg/w7JBMMh");

    if(!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.reply("Tu n'es pas V.I.P tu ne peux pas utiliser cette commande.")
    message.channel.send(discordnitrocheckerdivision);

    }
    
    module.exports.help = {
        name: 'nitrochecker'
    };