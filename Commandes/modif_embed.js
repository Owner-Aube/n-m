const Discord = require("discord.js");
const answers = [
    'https://media.giphy.com/media/ZL2iRxhnDwtSE/giphy.gif'
]

module.exports.run = (client, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)]
const helpEmbed = new Discord.RichEmbed()


        .setTitle('**Test version 1**')
        .setColor('#FF0000')
        .setImage(answer)
        .addField('**Evee**', '*Shadow legend*')
    message.channel.send(helpEmbed);
    
    
    const helpEmbed = new Discord.MessageEmbed()
	.setTitle('OMG ça modifie')
	.setDescription('Sub to missivi');

message.edit(helpEmbed);

    };

    module.exports.help = {
        name: 'test-embed'
   };
