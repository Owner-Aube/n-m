const Discord = require("discord.js");

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
    let KekkeiD = message.guild.roles.find("name", "『🉐』Taijutsu Ⓓ ➤ +１０ ")
    let KekkeiC = message.guild.roles.find("name", "『🉐』Taijutsu Ⓒ ➤ +２０ ")
    let KekkeiB = message.guild.roles.find("name", "『🉐』Taijutsu Ⓑ ➤ +３０ ")
    let KekkeiA = message.guild.roles.find("name", "『🉐』Taijutsu Ⓐ ➤ +４０ ")
    let KekkeiS = message.guild.roles.find("name", "『🉐』Taijutsu Ⓢ ➤ +５０")
    
        if(message.content.startsWith('!entrainement')){

                message.channel.send("Votre personnage est trop fatigué pour s'entrainer, veuillez patienter.")

            }else{


            if(!KekkeiD) message.channel.send("Vous n'avez pas les compétences requise pour effectuer cette entrainement !")
            if(answer === answers[0]) {
                message.channel.send("Ton entrainement n'a pas abouti")

            }else{

                if (answer === answers[1]) {
                member.addRole("700308181494267944")
                if(message.member.roles.find(r => r.name === "『🉐』Taijutsu Ⓓ ➤ +１０ ")){
                    member.addRole("700308256488423514")
                    if(message.member.roles.find(r => r.name === "『🉐』Taijutsu Ⓒ ➤ +２０ ")){
                        member.addRole("700308292630741005")
                        if(message.member.roles.find(r => r.name === "『🉐』Taijutsu Ⓑ ➤ +３０ ")){

                        member.addRole("700308329641279488")
                        if(message.member.roles.find(r => r.name === "『🉐』Taijutsu Ⓐ ➤ +４０ ")){
                            member.addRole("700308366097907733")
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

module.exports.help = {
    name: 'entrainement-taijutsu'
};
