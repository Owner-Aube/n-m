const Discord = require('discord.js');
const answers = [
    "https://i.imgur.com/DsuN9zp.gif",
    "https://i.imgur.com/7mhZ6d5.gif",
    "https://i.imgur.com/CB2abrf.gif",
    "https://i.imgur.com/w0SZPLk.gif",
    "https://i.imgur.com/QXmgchp.gif",
]


module.exports.run = (client, message, args) => {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    const zteamhelpEmbed = new Discord.RichEmbed()
        .setTitle('**__Commandes :__**')
        .setColor('RANDOM')
        .setURL('https://discord.gg/Wh3Kqch')
        .setImage(answer)
        .addField('**__Addrole__**', 'Ajoute le Rôle de votre choix.', true)
        .addField('**__Ban__**', 'Banni le joueur de votre choix', true)
        .addField('**__Clear__**', 'Clear le nombre de message de votre choix', true)
        .addField('**__delrole__**', 'Supprime le Rôle de votre choix.', true)
        .addField('**__Kick__**', 'Expulse le joueur de votre choix.', true)
        .addField('**__Ping__**', 'Affiche votre Ping', true)
        .addField('**__Stats__**', 'Affiche les statistiques de votre compte.', true)
        .addField('**__Roll__**', 'Génère un nombre au hazard entre 0 et le nombre indiqué (idéal pour le rôleplay)', true)
        .addField('**__Help__**', 'Affiche cette page d\'aide', true)
        .addField('**__Say__**', 'Permet de faire dire au bot tout ce que vous souhaitez', true)
        .addField('**__Stock__**', 'Permet d\'afficher la pagez d\'aide afin de généré des comptes', true)
        .addField('**__nitrochcker__**', 'Permet de vérifier une liste de nitro uncheck', true)
        .addField('**__Giveaway__**', 'permet de faire des giveaway', true)
        .addField('**__dm__**', 'permet d\'envoyer un message au joueur de votre choix.', true)
        .setTimestamp()
        .setFooter('Z-Team Bot')
    message.channel.send(zteamhelpEmbed)
};

module.exports.help = {
    name: 'help'
};
