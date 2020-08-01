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
    let KekkeiD = message.guild.roles.find("name", "『🈯️』Kenjutsu Ⓓ ➤ +１０")
    let KekkeiC = message.guild.roles.find("name", "『🈯️』Kenjutsu Ⓒ ➤ +２０")
    let KekkeiB = message.guild.roles.find("name", "『🈯️』Kenjutsu Ⓑ ➤ +３０")
    let KekkeiA = message.guild.roles.find("name", "『🈯️』Kenjutsu Ⓐ ➤ +４０")
    let KekkeiS = message.guild.roles.find("name", "『🈯️』Kenjutsu Ⓢ ➤ +５０")
    
        if(message.content.startsWith('!entrainement')){

                message.channel.send("Votre personnage est trop fatigué pour s'entrainer, veuillez patienter.")

            }else{


            if(!KekkeiD) message.channel.send("Vous n'avez pas les compétences requise pour effectuer cette entrainement !")
            if(answer === answers[0]) {
                message.channel.send("Ton entrainement n'a pas abouti")

            }else{

                if (answer === answers[1]) {
                member.addRole("700311430288900147")
                                        message.channel.send("``` ```\n**Bravo ! Tu as réussi avec succès ton entraînement !**\n\n``` ```")
                if(message.member.roles.find(r => r.name === "『🈯️』Kenjutsu Ⓓ ➤ +１０")){
                    member.addRole("700311498416848976")
                    if(message.member.roles.find(r => r.name === "『🈯️』Kenjutsu Ⓒ ➤ +２０")){
                        member.addRole("700311560396079145")
                        if(message.member.roles.find(r => r.name === "『🈯️』Kenjutsu Ⓑ ➤ +３０")){

                        member.addRole("700311605484978188")
                        if(message.member.roles.find(r => r.name === "『🈯️』Kenjutsu Ⓐ ➤ +４０")){
                            member.addRole("700311653195186237")
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
    name: 'entrainement-kenjutsu'
};
