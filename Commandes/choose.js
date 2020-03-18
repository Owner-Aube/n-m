const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    const choice1 = args[0]
    const choice2 = args.slice(1).join(" ")
    if (choice2 < 1) return message.channel.send("Veuillez séléctionné une option.")
    var choices = [`${choice1}`, `${choice2}`]
    message.channel.send(`Mon choix est ${choices[Math.floor(Math.random() * choices.length)]}!`);
  }

module.exports.help = {
    name: 'choose'
};