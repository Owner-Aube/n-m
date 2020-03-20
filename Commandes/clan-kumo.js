const Discord = require('discord.js');
let answers = [ 
    "\n ``` ```\n **__Clan Yotsuki (夜月一族)__**\n\`\`\`fix\n Les membres de ce clan sont très connu du faite que le plus grand Raikage faisait partie du clan et que son frère était le porteur du Hachibi. Généralement grand et le teint basané, ils disposent d'un incroyable charisme. Ils n'ont pas réellement de particularité comme des techniques héréditaire ou une affinité combiné, ils sont bon en raiton mais peuvent aussi utiliser une autre affinité. Leur capacité première viens de leur physique: tous sont des forces de la nature déjà car c'est un trait héréditaire mais aussi car ils subissent un entrainement très rigoureux depuis qu'ils sont tout petit. \`\`\`\n ``` ``` \n Aucun Gif",
     "\n ``` ```\n **__Clan Arashi (アラシ)__**\n\`\`\`fix\n Clan aussi ancien que celui des Yotsuki. Celui-ci est plus spécialisé dans le ninjutsu et sait habilement utiliser des techniques qui peuvent aussi bien blesser que tuer ou encore immobiliser. L'affinité Ranton permet en outre de manipuler le suiton et le raiton en même temps ce qui crée des techniques relativement dangereuse. \`\`\`\n ``` ``` \n Aucun Gif"
	"\n ``` ```\n **__Clan Kuroi yami (黒い闇)__**\n\`\`\`fix\n (Clan Inventé) Après la grande guerre Ninja, Darui créa un clan appelé Kuroi Yami, celui-ci est spécialisé dans l'art du Ranton et dans le maniement d'arme lourde, ce clan est un des plus puissant de Kumo.\`\`\`\n ``` ``` \n https://tenor.com/view/darui-gif-7758048",
	"\n ``` ```\n **__Clan Chinoike ((血之池一族)__**\n\`\`\`fix\n Peu de temps après le début de la formation des villages cachés, le clan Chinoike fut reconnu par leurs yeux qui étaient rouges comme le sang dont, d'après les rumeurs, il était impossible de détourner le regard après avoir regardé leurs yeux. À cette époque le clan avait arrangé un mariage entre une femme Chinoike et le daimyô du Pays de la Foudre, devenant sa concubine, mais la femme du daimyô était jalouse. Le Clan Chinoike maitrise un mystérieux Dodjutsu qui la pupille de l'utilisateur Noir avec un trait rouge luisant . . .\`\`\`\n ``` ``` \n https://tenor.com/view/chino-chinoike-clan-naruto-shippuden-red-eyes-mata-merah-gif-12227986",
]


module.exports.run = (client, message, args) => {

	
    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));	
    const answer = answers[Math.floor(Math.random() * answers.length)];

        message.reply(answer)
    	member.removeRole('690566340448354346')
};

module.exports.help = {
    name: 'nrp!clan-kumo'
};
