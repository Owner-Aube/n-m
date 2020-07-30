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
    let KekkeiD = message.guild.roles.find("name", "『🈹』Kekkei Genkai Ⓓ ➤ +１０")
    let KekkeiC = message.guild.roles.find("name", "『🈹』Kekkei Genkai Ⓒ ➤ +２０")
    let KekkeiB = message.guild.roles.find("name", "『🈹』Kekkei Genkai Ⓑ ➤ +３０")
    let KekkeiA = message.guild.roles.find("name", "『🈹』Kekkei Genkai Ⓐ ➤ +４０")
    let KekkeiS = message.guild.roles.find("name", "『🈹』Kekkei Genkai Ⓢ ➤ +５０")
    
        if(message.content.startsWith('!entrainement')){
            if (talkedRecently.has(message.author.id)) {

                message.channel.send("Votre personnage est trop fatigué pour s'entrainer, veuillez patienter.")

            }else{


            if(!KekkeiD) message.channel.send("Vous n'avez pas les compétences requise pour effectuer cette entrainement !")
            if(answer === answers[0]) {
                message.channel.send("Ton entrainement n'a pas aboutit")

            }else{

                if (answer === answers[1]) {
                member.addRole("700628678094225488")
                if(message.member.roles.find(r => r.name === "『🈹』Kekkei Genkai Ⓓ ➤ +１０００")){
                    member.addRole("700628859636154458")
                    if(message.member.roles.find(r => r.name === "『🈹』Kekkei Genkai Ⓒ ➤ +２０００")){
                        member.addRole("700622868148650047")
                        if(message.member.roles.find(r => r.name === "『🈹』Kekkei Genkai Ⓑ ➤ +３０００")){

                        member.addRole("700622854886260736")
                        if(message.member.roles.find(r => r.name === "『🈹』Kekkei Genkai Ⓐ ➤ +４０００")){
                            member.addRole("700622843699920897")
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
    name: 'entrainement-kekkei'
};
