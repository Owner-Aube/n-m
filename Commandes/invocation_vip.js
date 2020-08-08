const Discord = require("discord.js");
let answers = [
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『👾』Invocation Ⓑ ➤ Nuiba, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🦔』Invocation Ⓑ ➤ Kamatari, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐚』Invocation Ⓑ ➤ Roi Conch, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐝』Invocation Ⓑ ➤ Reine des Abeilles, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐍』Invocation Ⓐ ➤ Serpents Bicéphales, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐸』Invocation Ⓐ ➤ Gamahiro, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐲』Invocation Ⓐ ➤ Caméléon Géant à Queue de Serpent, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐵』Invocation Ⓢ ➤ Enma, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
]

module.exports.run = (client, message, args) => {

let member = message.guild.member(message.author.id);
let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '))
let anwser = answers[Math.floor(Math.random() * answers.length)]
let mention = message.author.id


if(message.member.roles.find("name", "『📦』Pack Opening ➤ Ticket d'Invocation VIP")){
    client.channels.get("727886694820610128").send(`<@${mention}> ${anwser}`)
    message.reply(`<@${mention}> ${anwser}`)
    member.removeRole('741643340218499144')

  }else{

    message.reply("Tu n'a pas de ticket d'invocation !")
  }};


module.exports.help = {
    name: 'ticket-invocation-vip'
};
