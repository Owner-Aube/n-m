const Discord = require("discord.js");
let answers = [
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐸』Invocation Ⓓ ➤ Kôsuke, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐸』Invocation Ⓓ ➤ Gerotora, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐸』Invocation Ⓓ ➤ Gamatatsu, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🦅』Invocation Ⓒ ➤ Oiseau Ninja Géant, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐸』Invocation Ⓒ ➤ Shima, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐶』Invocation Ⓒ ➤ Guruko, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🦅』Invocation Ⓑ ➤ Garuda, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐚』Invocation Ⓑ ➤ Roi Conch, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐍』Invocation Ⓐ ➤ Serpents Bicéphales, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
    "``` ```\n***``Bravo tu as obtenu l'invocation suivante : 『🐸』Invocation Ⓢ ➤ Gamabunta, tu peux considérer que tu l'as dans ton RP, même si le staff ne t'a pas encore mis le rôle !``***\n\n``` ```",
]

module.exports.run = (client, message, args) => {

let member = message.guild.member(message.author.id);
let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '))
let anwser = answers[Math.floor(Math.random() * answers.length)]
let mention = message.author.id


if(message.member.roles.find("name", "『📦』Pack Opening ➤ Ticket d'Invocation d'ouverture")){
    message.reply(`<@${mention}> ${anwser}`)
    client.channels.get("727886694820610128").send(`<@${mention}> ${anwser}`)
    member.removeRole('704300242593513603')

  }else{

    message.reply("Tu n'a pas de ticket d'invocation !")
  }};


module.exports.help = {
    name: 'ticket-invocation-ouverture'
};
