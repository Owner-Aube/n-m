const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let discordnitrocheckerdivision = new Discord.RichEmbed()
    .setColor("#D3D3D3")
    .setTitle('**__Météo du 14/03/2020__**')
    .setFooter('Météo | 14/03/20')
    .addField('**__[France]__**', 'Temps assez nuageux en ce Samedi, seulement 12°c au alentours de la Capital ! Pas de pluie prévu mais pas de Soleil également malheureusement.')
    message.channel.send(discordnitrocheckerdivision);

    }
    
    module.exports.help = {
        name: 'displaymeteo'
    };