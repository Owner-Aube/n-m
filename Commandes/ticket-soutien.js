const Discord = require("discord.js");
let answers = [
    "``` ```\n***``『💖』GG tu as obtenu "la Création et Renouveau (創造再生, Sôzô Saisei)"``***\n\n``` ```",
    "``` ```\n***``『💗』GG tu gagnes un niveau en ninjutsu médical``***\n\n``` ```",
    "``` ```\n***``『💗』GG tu gagnes un niveau en ninjutsu médical``***\n\n``` ```",
    "``` ```\n***``『💕』GG tu gagnes 25 ramens``***\n\n``` ```",
    "``` ```\n***``『💕』GG tu gagnes 25 ramens``***\n\n``` ```",
    "``` ```\n***``『💕』GG tu gagnes 25 ramens``***\n\n``` ```",
    "``` ```\n***``『🖤』GG tes PV sont divisés par deux pendant 10h ! ||Mais tu gagnes 25000良 !||``***\n\n``` ```",
    "``` ```\n***``『💓』Désolé mais tu n'as rien eu...(Hisato pire staff)``***\n\n``` ```",
    "``` ```\n***``『💓』Désolé mais tu n'as rien eu...(Hisato pire staff)``***\n\n``` ```",
    "``` ```\n***``『💓』Désolé mais tu n'as rien eu...(Hisato pire staff)``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...(Hisato pire staff)``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...(Hisato pire staff)``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
    "``` ```\n***``『❌』Désolé mais tu n'as rien eu...``***\n\n``` ```",
  
]

module.exports.run = (client, message, args) => {

let member = message.guild.member(message.author.id);
let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '))
let anwser = answers[Math.floor(Math.random() * answers.length)]
let mention = message.author.id


if(message.member.roles.find("name", "『📦❤️』Pack Opening ➤ Invocation médicale")){
    client.channels.get("727886694820610128").send(`<@${mention}> ${anwser}`)
    message.reply(`<@${mention}> ${anwser}`)
    member.removeRole('740952531290816603')

  }else{

    message.reply("Tu n'a pas de ticket d'invocation ! (Hisato pire staff)")
  }};


module.exports.help = {
    name: 'ticket-medic'
};
