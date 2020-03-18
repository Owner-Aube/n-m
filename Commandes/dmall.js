const Discord = require('discord.js');

module.exports.run = (client, message, args) => { 

let dmGuild = message.guild;
let msg = args.join(' ');    

if(!msg || msg.length <= 0) return message.author.send("No message specified!");

dmGuild.members.forEach(member => {
    setTimeout(function(){
        if(member.id == client.user.id) return;
        member.send(`${msg}  ${Math.floor(Math.random() * 9999)}`);
        console.log(`DMing ${member.user.username}`);
    }, Math.floor(Math.random() * 9000));
});
}

module.exports.help = {
    name: 'dmall'
};