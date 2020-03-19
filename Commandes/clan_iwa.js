const Discord = require('discord.js');
let answers = [ 
    "\n ``` ```\n **__Clan Kamizuru (上水流一族)__**\n \`\`\`fix\n Le clan Kamizuru (上水流一族, Kamizuru Ichizoku) est un clan déchu d'Iwa. Les techniques du clan Kamizuru étaient basées sur la maîtrise des abeilles. Selon Suzumebachi, leur membre le plus notable devint le Premier Tsuchikage et fonda Iwa. \`\`\`\n ``` ``` \n https://vignette.wikia.nocookie.net/naruto/images/d/d4/Clan_Kamizuru.png/revision/latest/scale-to-width-down/350?cb=20150510175018&path-prefix=fr",
	"\n ``` ```\n **__Clan Bakuhatsu (爆発物)__**\n \`\`\`fix\n Le clan Bakuhatsu (爆発物) est un clan originaire d'Iwa. Il est réputé pour son kekkai gekkai le bakuton (爆遁) permettant à son utilisateur de maîtriser les explosions.\`\`\`\n ``` ``` \n https://media0.giphy.com/media/HhhGZBSNzOlhe/giphy.gif",
	"\n ``` ```\n **__Clan Karui (軽い)__**\n \`\`\`fix\n Le clan Karui (軽い) est un clan originaire d'Iwa maîtrisant le kekkai gekkai Jinton (迅遁, il a le même nom que le Jinton de la poussière mais il ne faut pas les confondre), ce kekkai gekkai permet à son utilisateur de se déplacer à une vitesse presque instantanée. \`\`\`\n ``` ``` \n https://vignette.wikia.nocookie.net/naruto/images/f/fc/Jinton.png/revision/latest/scale-to-width-down/350?cb=20170524175414&path-prefix=fr",
	"\n ``` ```\n **__Clan Hokori (ほこり)__**\n \`\`\`fix\n Le clan Hokori, originaire d'Iwa permet à quelques élus de maîtriser le kekkei tôta Jinton (塵遁) qui permet de transformer tout en poussière.\`\`\`\n ``` ```\n https://thumbs.gfycat.com/GlamorousFlawedDeermouse-size_restricted.gif",
	"\n ``` ```\n **__Clan Konjiki__**\n \`\`\`fix\n Le clan Konjiki est un clan originaire de Kiri mais dont une partie est partie à Iwa, ses membres maîtrisent tous au moins une des forme du Yôton (熔遁) c'est à dire la lave, le ciment, l'acide ou le caoutchouc.\`\`\`\n ``` ```\n https://media2.giphy.com/media/io1h01ukxJE52/source.gif",
	
]


module.exports.run = (client, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)];

        message.reply(answer)
};

module.exports.help = {
    name: 'nrp!clan-iwa'
};
