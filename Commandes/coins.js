const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .addField("**__Vos Coins 💰__**", uCoins);

  message.channel.send(coinEmbed);//.then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "coins"
}
