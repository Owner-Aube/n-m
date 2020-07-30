const Discord = require("discord.js");
const talkedRecently = new Set();

const answers = [
    "Votre entrainement n'a pas abouti à quelque chose de correct",
    "Votre entrainement à porté ses fruits."
]


module.exports.run = (client, message, args) => {

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '))
    let mention = message.author.id
    let CooldownRole = message.guild.roles.find("name", "Cooldown")
    let answer = answers[Math.floor(Math.random() * answers.length)]
    let KekkeiD = message.guild.roles.find("name", "『🉑』Ninjutsu Ⓓ ➤ +１０")
    let KekkeiC = message.guild.roles.find("name", "『🉑』Ninjutsu Ⓒ ➤ +２０")
    let KekkeiB = message.guild.roles.find("name", "『🉑』Ninjutsu Ⓑ ➤ +３０")
    let KekkeiA = message.guild.roles.find("name", "『🉑』Ninjutsu Ⓐ ➤ +４０")
    let KekkeiS = message.guild.roles.find("name", "『🉑』Ninjutsu Ⓢ ➤ +５０")
    
        if(message.content.startsWith('!entrainement')){
            if (talkedRecently.has(message.author.id)) {

                message.channel.send("Votre personnage est trop fatigué pour s'entrainer, veuillez patienter.")

            }else{


            if(!KekkeiD) message.channel.send("Vous n'avez pas les compétences requise pour effectuer cette entrainement !")
            if(answer === answers[0]) {
                message.channel.send("Ton entrainement n'a pas abouti")

            }else{
if (answer === answers[1]) {
    member.addRole("700308416169508924")
    if(message.member.roles.find(r => r.name === "『🉑』Ninjutsu Ⓓ ➤ +１０")){
        member.addRole("700308459865899028")
        if(message.member.roles.find(r => r.name === "『🉑』Ninjutsu Ⓒ ➤ +２０")){
            member.addRole("700308516748918834")
            if(message.member.roles.find(r => r.name === "『🉑』Ninjutsu Ⓑ ➤ +３０")){

            member.addRole("700308553159802900")
            if(message.member.roles.find(r => r.name === "『🉑』Ninjutsu Ⓐ ➤ +４０")){
                member.addRole("700308581915951105")
            }else{

            }
                
            }else{
                
            }

        }else{



        }

    }else{



    }
    
}

}

}


}
talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 21600000);


}

module.exports.help = {
name: 'entrainement-ninjutsu'
};