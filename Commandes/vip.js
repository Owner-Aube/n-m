const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));

    if(message.member.roles.find("name", "『💎』VIP")){
        const VIPDETECTED = new Discord.RichEmbed()
            .setTitle("**__Status acctuel :__**")
            .addField("**__V.I.P :__**", "[✅] -> Vous êtes acctuellement V.I.P")
            message.channel.send(VIPDETECTED)
    }else{

        const VIPNOTDETECTED = new Discord.RichEmbed()
        .setTitle("**__Status acctuel :__**")
        .addField("**__V.I.P :__**", "[❌] -> Vous n'êtes pas V.I.P")
        .setFooter("Astuce : Afin que la personne ai le rôle V.I.P sur votre serveur, ajoutez un rôle ''V.I.P'' !")
        message.channel.send(VIPNOTDETECTED)
    }
}

module.exports.help = {
    name: 'status'
};
