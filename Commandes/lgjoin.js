const Discord = require('discord.js');

module.exports.run = (bot,message, args) => {

    let member = message.guild.member(message.author.id);

    if(message.member.roles.find("name", "🎫・Salle d'attente")){
        message.channel.send("**__Vous avez rejoint le host ! attendez que l'hôte lance la partie !__**")
        member.addRole('685185539116368018')
        member.removeRole('685184750134100087')

      }else{

        message.channel.send('Aucune partie n\'a été trouvé !')

    }


};

module.exports.help = {
    name: "lgjoin"
}