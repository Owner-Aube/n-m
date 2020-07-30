const Discord = require("discord.js");
const talkedRecently = new Set();

const answers = [
    "Votre entrainement n'a pas aboutit à quelque chose de correct",
    "Votre entrainement à porté ses fruits."
]


module.exports.run = (client, message, args) => {

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '))
    let mention = message.author.id
    let CooldownRole = message.guild.roles.find("name", "Cooldown")
    let answer = answers[Math.floor(Math.random() * answers.length)]
    let KekkeiD = message.guild.roles.find("name", "@『❤️』Ninjutsu Médical Ⓓ ➤ +３０")
    let KekkeiC = message.guild.roles.find("name", "@『❤️』Ninjutsu Médical Ⓒ ➤ +６０")
    let KekkeiB = message.guild.roles.find("name", "@『❤️』Ninjutsu Médical Ⓑ ➤ +９０")
    let KekkeiA = message.guild.roles.find("name", "@『❤️』Ninjutsu Médical Ⓐ ➤ +１２０")
    let KekkeiS = message.guild.roles.find("name", "@『❤️』Ninjutsu Médical Ⓢ ➤ +１５０")
    
        if(message.content.startsWith('!entrainement')){
            if (talkedRecently.has(message.author.id)) {

                message.channel.send("Votre personnage est trop fatigué pour s'entrainer, veuillez patienter.")

            }else{


            if(!KekkeiD) message.channel.send("Vous n'avez pas les compétences requise pour effectuer cette entrainement !")
            if(answer === answers[0]) {
                message.channel.send("Ton entrainement n'a pas abouti")

            }else{

                if (answer === answers[1]) {
                member.addRole("700314762445062154")
                if(message.member.roles.find(r => r.name === "@『❤️』Ninjutsu Médical Ⓓ ➤ +３０")){
                    member.addRole("700314798436384800")
                    if(message.member.roles.find(r => r.name === "@『❤️』Ninjutsu Médical Ⓒ ➤ +６０ ")){
                        member.addRole("700314816010649681")
                        if(message.member.roles.find(r => r.name === "@『❤️』Ninjutsu Médical Ⓑ ➤ +９０")){

                        member.addRole("700314830803828786")
                        if(message.member.roles.find(r => r.name === "@『❤️』Ninjutsu Médical Ⓐ ➤ +１２０")){
                            member.addRole("700314844137521172")
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
    name: 'entrainement-medic'
};