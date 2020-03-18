const Discord = require('discord.js');
const answers = [
    "philcoops@sky.com:Verygood1",
    "sebpaquin123@hotmail.com | Password: slayers123",
    "mhfbkr@gmail.com | Password: maxim1414",
    "govindarumi@gmail.com | Password: Twenty20",
    "rmorlarived@yahoo.es:Telefonica1",
    "mjcarrillo93@gmail.com:Panasonic88",
    "hajime0811one@yahoo.co.jp:firstone1",
    "bigjdg@gmail.com:joseph0110",
    "tihayden124@gmail.com:Storing33",
    "aravasleopardali@hotmail.com:namlas4991",
    "mydkinbera@gmail.com:ottawa12",

]

module.exports.run = (bot,message, args) => {
    const answer = answers[Math.floor(Math.random() * answers.length)];

    let divisiongennordvpn = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("**__NordVPN Account Generator__**")
        .addField("**__Votre compte est prêt :__**", answer)
        .setFooter("Division -> NordVPN Gen")

        message.author.send(divisiongennordvpn);

    let divisiongennordvpn2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("**__NordVPN Accoutn Generator__**")
        .addField('Félicitations !', 'Merci de ta fidélité ! Le compte t\'a été envoyé en message privé veille bien à garder t\'es mp activé') 
        .setFooter("Division -> NordVPN Gen")

        message.channel.send(divisiongennordvpn2)

}

module.exports.help = {
    name: "nordvpn"
}