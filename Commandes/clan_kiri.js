const Discord = require('discord.js');
let answers = [ 
    "\n ``` ```\n **__Clan Hoshigaki (干柿一族)__**\n \`\`\`md\n#Le Clan Hoshigaki (干柿一族, Hoshigaki Ichizoku) est un clan de ninja de Kiri. Tous les membres connus de ce clan possèdent des attributs de requins, tels que dents pointues et aiguisées et des caractéristiques faciales qui ressemblent à des branchies\`\`\`\n ``` ``` \n https://media1.tenor.com/images/230fc756b4e3a679985b859d32d505e8/tenor.gif?itemid=11686373",
	"\n ``` ```\n **__Clan Hôzuki (鬼灯一族)__**\n \`\`\`md\n#Le Clan Hôzuki (鬼灯一族, Hôzuki Ichizoku) est un clan originaire de Kiri. Suigetsu Hôzuki, son frère Mangetsu Hôzuki et le Deuxième Mizukage en sont issus. Ce clan souvent tapi dans l'ombre, fit son apparition quelques années après la création de Kiri. Comptant peu de membres, il reste une famille de tueurs innés, aussi nommé « rejetons du démon ».\`\`\`\n ``` ``` \n https://66.media.tumblr.com/1e14714bb604d32ec3efbe9a13b9ec19/tumblr_oxnne2TyqU1v5sogro1_r1_500.gifv",
	"\n ``` ```\n **__Clan Kaguya (かぐや一族)__**\n \`\`\`md\n#Le Clan Kaguya (かぐや一族, Kaguya Ichizoku) possédait un kekkei genkai permettant de contrôler la croissance des os du corps. Cela permettait de pouvoir utiliser leurs os pour se battre et même changer des os en armes tel qu'un bras en sabre ou la colonne vertébrale en fouet. De plus, leurs squelettes était bien plus résistant qu'un être humain normal en raison du fait qu'ils pouvaient contrôler le taux de calcium dans leur os. Ils étaient donc taillés pour le combat. Mais contrairement au clan Uchiwa, le kekkei genkai du clan Kaguya n'était octroyé qu'à certains individus tel que Kimimaro dont le pouvoir effrayait même les autres membres de ce clan de guerrier, les caractéristiques qui décidaient si un Kaguya posséderait ou non le kekkei genkai restent inconnues.\`\`\`\n ``` ``` \n https://66.media.tumblr.com/8e36a71d99b6e0fbe41664ce06a0cfc5/tumblr_ori8xkxPNx1sz111so1_400.gifv",
        "\n ``` ```\n **__Clan Kurisutaru (クリスタル)__**\n \`\`\`md\n#Le Clan Kurisutaru (クリスタル), originaire de kiri maîtrise le kekkai gekkai Shôton. Le Shôton (晶遁, Shôton) est un domaine rare et spécialisée du ninjutsu élémentaire qui permet de créer du cristal ainsi que de manipuler les cristaux déjà existants et les structures cristallines.\`\`\`\n ``` ```\n https://vignette.wikia.nocookie.net/naruto/images/e/ee/Sh%C3%B4ton.png/revision/latest/scale-to-width-down/350?cb=20161213221528&path-prefix=fr",
	"\n ``` ```\n **__Clan Konjiki__**\n \`\`\`md\n# Le clan Konjiki est un clan originaire de Kiri mais dont une partie est partie à Iwa, ses membres maîtrisent tous au moins une des forme du Yôton (熔遁) c'est à dire la lave, le ciment, l'acide ou le caoutchouc.\`\`\`\n ``` ```\n https://media2.giphy.com/media/io1h01ukxJE52/source.gif",
	"\n ``` ```\n **__Clan Yuki (雪一族)__**\n \`\`\`md\n# Le Clan Yuki (雪一族, Yuki Ichizoku) était un ancien clan vivant dans le Pays de l'Eau, maîtrisant le Hyôton.\`\`\`\n ``` ```\n https://i.skyrock.net/4942/94684942/pics/3317039578_1_3_rgSIfj0m.gif",
	
]


module.exports.run = (client, message, args) => {

    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));	
    const answer = answers[Math.floor(Math.random() * answers.length)];

        message.reply(answer)
    	member.removeRole('690566340448354346')
};

module.exports.help = {
    name: 'nrp!clan-kiri'
};
