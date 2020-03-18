const Discord = require('discord.js');

module.exports.run = (client, message, args) => { 
 let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')

    dUser.send(`${dMessage}`)

    message.author.send(`${message.author} tu as envoyé un message à ${dUser}`)

    let dmuserembedivision = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**__Message envoyé avec succès__**")
    .addField("**__Vous avez envoyé le message suivant :__**", `${dMessage}`)
    .addField("**__Le Message à été envoyé à__**", `${dUser}`)
    .setFooter("Division -> https://discord.gg/w7JBMMh");

    message.channel.send(dmuserembedivision);
}

module.exports.help = {
    name: 'dm'
};

