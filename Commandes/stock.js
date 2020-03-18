const Discord = require('discord.js');
module.exports.run = (client, message, args) => { 

    let stockembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("**__Stock Disponnible :__**")
        .addField('**__NordVPN__**', 'Il y\'a actuellement 11 comptes disponibles. Pour en généré un fait .nordvpn', true)
        .addField('**__Origin__**', 'Il y\'a actuellement 21 comptes disponibles. Pour en généré un fait .origins ', true)
        .setFooter('Division -> Stock')

    message.channel.send(stockembed)



}
module.exports.help = {
    name: 'stock'
};