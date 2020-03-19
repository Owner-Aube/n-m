const Discord = require('discord.js');
let answers = [ 
    "\n ``` ```\n **__Konoha (木ノ葉隠れの里)__**\n \`\`\`diff\n- Konoha (木ノ葉隠れの里, Konohagakure no Sato) est le village caché de la Feuille. Tout comme les villages cachés des cinq autres grands pays, le village de Konoha est dirigé par un kage, en l'occurrence le Hokage. Le bandeau frontal des ninjas de Konoha est frappé d'une feuille stylisée. Cette feuille symbolise les méthodes d'apprentissage qui étaient dispensées aux aspirants ninjas des précédentes générations : une feuille était posée sur leurs fronts et ils devaient la faire tourner afin d'accroître leur concentration et de développer leur maîtrise de soi.\`\`\`\n ``` ``` \n https://media1.tenor.com/images/bcfbaa4f6dbce9e605775c5cb927ad44/tenor.gif?itemid=14801470",
        "\n ``` ```\n **__Kiri (霧隠れ•の•里)__**\n \`\`\`md\n# Kiri (霧隠れ•の•里, Kirigakure no satō) est le village caché de la Brume ; il est dirigé par le Mizukage. Les bandeaux frontaux des ninjas originaires de ce village représentent une nappe de brouillard figurée par quatre traits légèrement ondulés.\`\`\`\n ``` ``` \n https://pa1.narvii.com/6906/92fa7028df72ce73e738e9bf4555c5dc85a52739r1-320-240_00.gif",
    "\n ``` ```\n **__Kumo (雲隠れの里)__**\n \`\`\`fix\n Kumo (雲隠れの里, Kumogakure No Sato), est le village caché des Nuages. Il est dirigé par le Raikage. Son symbole représente des nuages stylisés. Ses ninjas utilisent des katanas à la place des kunaïs et sont spécialisés dans les techniques de maîtrise de l'élément foudre. Le village, construit autour d'une immense tour (la résidence du raikage), est situé au sommet d'une montagne et est ainsi perpétuellement entouré de nuages.\`\`\`\n ``` ``` \n https://66.media.tumblr.com/362900e0585290c8c4b12e59494dddc9/tumblr_nnrzohg3Ip1rpyyxoo1_400.gif",
    "\n ``` ```\n **__Suna (砂隠れの里)__**\n \`\`\`fix\n Suna (砂隠れの里, Sunagakure no Sato?) est le village caché du Sable ; il est dirigé par le Kazekage. Shukaku en est originaire, dont on dit qu'il fut créé à partir d'un prêtre mort dans le désert. Le symbole figurant sur les bandeaux des ninjas de Suna est un sablier stylisé. Suna est aussi connu pour certains de ses ninjas qui utilisent des marionnettes de combat.\`\`\`\n ``` ``` \n https://thumbs.gfycat.com/DefiniteSameBrahmanbull-size_restricted.gif",
    "\n ``` ```\n **__Iwa (岩隠れの里)__**\n \`\`\`fix\n Iwa (岩隠れの里, Iwagakure no Sato?) est le village caché de la Roche. Bâti à flanc de montagne et composé de tours reliées entre elles par des ponts et des passerelles, il est dirigé par le Tsuchikage. On sait peu de choses sur ses ninjas, excepté qu'ils sont spécialisés dans les techniques de terre et qu'ils ont une fidélité sans limite envers leur kage.\`\`\`\n ``` ``` \n https://media0.giphy.com/media/VL0cQWykgM65O/giphy.gif",

]


module.exports.run = (client, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)];
    
    message.reply(answer)

};

module.exports.help = {
    name: 'nrp!village'
};
