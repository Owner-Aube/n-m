const Discord = require('discord.js');
const answers = [
    "aleccampos10@yahoo.com:Loldogg333",
    "ackerzpalace@hotmail.co.uk:Bertolli1",
    "alles.wintern@gmail.com:Arsenal1",
    "amedimad@hotmail.com:Lol156092",
    "antenneman14@gmail.com:Moikevin14",
    "Anthonyhdz94@yahoo.com:Anthony22",
    "antoine.stx@hotmail.fr:Pdr56220",
    "antoniocezar88@gmail.com:Cezinha88",
    "amoch529@gmail.com:microSD123",
    "antarcticninja@yahoo.com:Imaninja14",
    "andrak82@live.dk:Jensen821672",
    "andreapieri@hotmail.it:Asteritaly89",
    "andrak82@live.dk:Jensen821672",
    "androidk18@hotmail.com:Go2Hades",
    "andrisp10@inbox.lv:a1d3v5j7AA",
    "andycolocolino@live.cl:Andy17962",
    "anithalderfb@gmail.com:Virus109",
    "anna240594@live.it:Uabg97nilh11f",
    "papik813@o2.pl:A4e65266",
    "levhelm2002@gmail.com:buster2002",
    "vesna385@gmail.com:tingting777",


]

module.exports.run = (bot,message, args) => {
    const answer = answers[Math.floor(Math.random() * answers.length)];

    let embedgenorigin = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**__Origin's Account Generator__**")
    .addField("**__Votre compte est prêt !__**", answer)
    .setFooter("Division -> https://discord.gg/w7JBMMh");

    message.channel.send(embedgenorigin);

}
module.exports.help = {
    name: "origins"
}