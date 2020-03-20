const Discord = require('discord.js');
let answers = [ 
    "\n ``` ```\n **__Clan Shirogane (白銀一族)__**\n \`\`\`fix\n Le clan Shirogane (白銀一族, Shirogane Ichizoku) est un clan spécialisé dans le marionnettisme. Le clan Shirogane est un petit clan de shinobi, vivant à la frontière du Pays du Vent et n'ayant pas de ninjas puissants pour prendre la tête du clan. Tentant de compenser ce manque de talent, ils décident de concevoir des marionnettes et parviennent à créer une armée, suffisamment puissante pour survivre aux grandes guerres shinobi. \`\`\`\n ``` ``` \n https://media1.tenor.com/images/60e9541c52c72a5d08ab59f2ed2ce103/tenor.gif?itemid=11190747",
	"\n ``` ```\n **__Clan Jiki (磁気)__**\n \`\`\`fix\n Le clan Jiki (磁気), originaire de Suna est connu poue se kekkei genkai Jiton qui permet à son utilisateur d'utiliser les champs magnétiques pour se battre. \`\`\`\n ``` ``` \n https://vignette.wikia.nocookie.net/naruto/images/5/55/Limaille_de_fer.png/revision/latest/scale-to-width-down/350?cb=20130408211011&path-prefix=fr",
	"\n ``` ```\n **__Clan Kansō (乾燥)__**\n \`\`\`fix\n Le clan Kansō (乾燥), originaire de Suna est connu pour son kekkei genkai particulièrement puissant : Le Shakuton (灼遁, Shakuton). Le Shakuton (灼遁, Shakuton) est un kekkei genkai de combinaison de natures élémentaires composé de techniques qui mélangent des chakra basés sur les éléments feu et vent[1] pour créer une chaleur intense capable de faire chauffer le corps d'un ennemi au point que l'eau à l'intérieur de son corps finit par s'évaporer, tuant la victime et laissant le corps dans un état desséché. \`\`\`\n ``` ``` \n https://i.pinimg.com/originals/50/70/2e/50702e58e37362bdb1c5bee60ff9f0c7.gif",
	"\n ``` ```\n **__Clan Hagane (鋼)__**\n Le clan Hagane (鋼), originaire de Suna est surtout connu pour son kekkei genkai le Kôton (鋼遁, Kôton, Signification (Kana) : Art d'utiliser l'acier). \`\`\`fix\n  \`\`\`\n ``` ``` \n https://vignette.wikia.nocookie.net/naruto/images/9/9e/Koton.png/revision/latest?cb=20120701034338&path-prefix=fr",
	
]


module.exports.run = (client, message, args) => {

	
    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));	
    const answer = answers[Math.floor(Math.random() * answers.length)];

        message.reply(answer)
    	member.removeRole('690566340448354346')
};

module.exports.help = {
    name: 'nrp!clan-suna'
};
