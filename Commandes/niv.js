const Discord = require('discord.js');
const exp = require('../exp.json');

module.exports.run = (client, msg, args) => {
    if (!exp[msg.author.id]) {
        exp[msg.author.id] = {
            exp: 0,
            niveau: 1
        };
    }
  
    let cExp = exp[msg.author.id].exp;
    let cNiv = exp[msg.author.id].niveau;
    let nextLevelUp = cNiv * 100;
    let expNeededForLevelUp = nextLevelUp - cExp;

    let nivEmbedd = new Discord.RichEmbed()
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor('RANDOM')
        .addField('Niveau', cNiv, true)
        .addField('Experience', cExp, true)
        .setFooter(`${expNeededForLevelUp} points d'experience requis pour monter de niveau !`)


        msg.channel.send(nivEmbedd)

};

module.exports.help = {
    name: 'xp'
};
