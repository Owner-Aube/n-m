const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let annonce = new Discord.RichEmbed()
        .setTitle('**__Annonce :__**')
        .addField('**__[🎉] -> Ouverture__**', 'Le Serveur ouvrira quand tout les permissions/message seront fait, et également à 3 fiche rp !')

        message.channel.send(annonce)
    } 
    module.exports.help = {
        name: 'an'
    };
    