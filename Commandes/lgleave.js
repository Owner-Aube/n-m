const Discord = require('discord.js');

module.exports.run = (bot,message, args) => {

    let member = message.guild.member(message.author.id);

    if(message.member.roles.find("name", "🏷・en partie")){
        message.channel.send('Vous avez quitté la partie !')
        member.removeRole('685185539116368018')
        member.addRole('685184750134100087')

      }else{

        message.channel.send('Vous n\'êtes dans aucune partie !')

    }


};

module.exports.help = {
    name: "lgleave"
}