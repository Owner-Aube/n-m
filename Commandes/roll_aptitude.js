const Discord = require("discord.js");
let answers = [
    "``` ```\n***``Bravo ! Tu as roll l'aptitude `` ||``『👁️』Aptitude ➤ Ninja Sensoriel``||*** **(Plus d'infos : https://discordapp.com/channels/699513506814230548/700359491602088057/701106980877762600 )**\n\n``` ```",
    "``` ```\n***``Bravo ! Tu as roll l'aptitude `` ||``『💗』Aptitude ➤ Grande Régénération``||*** **(Plus d'infos : https://discordapp.com/channels/699513506814230548/700359491602088057/701110666949296190 )**\n\n``` ```",
    "``` ```\n***``Bravo ! Tu as roll l'aptitude `` ||``『😎』Aptitude ➤ Ninja Talentueux``||*** **(Plus d'infos : https://discordapp.com/channels/699513506814230548/700359491602088057/701111143330087033 )**\n\n``` ```",
    "``` ```\n***``Bravo ! Tu as roll l'aptitude `` ||``『👊』Aptitude ➤ Pro du Taijutsu``||*** **(Plus d'infos : https://discordapp.com/channels/699513506814230548/700359491602088057/701112878023049318 )**\n\n``` ```",
    "``` ```\n***``Bravo ! Tu as roll l'aptitude `` ||``『🧭』Aptitude ➤ Pouvoir Caché``||*** **(Plus d'infos : https://discordapp.com/channels/699513506814230548/700359491602088057/701113597237133312 )**\n\n``` ```",
    "``` ```\n***``Bravo ! Tu as roll l'aptitude `` ||``『🎓』Aptitude ➤ Élève Studieux``||*** **(Plus d'infos : https://discordapp.com/channels/699513506814230548/700359491602088057/701114302245109921 )**\n\n``` ```",
]

module.exports.run = (client, message, args) => {

let member = message.guild.member(message.author.id);
let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '))
let anwser = answers[Math.floor(Math.random() * answers.length)]
let mention = message.author.id


if(message.member.roles.find("name", "『✔️』Roll Aptitude ➤ Disponible")){
    client.channels.get("723508702232969248").send(`<@${mention}> ${anwser}`)
    client.channels.get("723508950997270568").send(`<@${mention}> ${anwser}`)
    member.removeRole('723507980590645300')

  }else{

    message.reply("Désolé mais tu ne peux plus effectuer ton roll d'aptitude !")
  }};


module.exports.help = {
    name: 'apti'
};
