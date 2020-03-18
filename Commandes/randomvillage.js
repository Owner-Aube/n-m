const Discord = require('discord.js');
let answers = [ 
    "\n ``` ```\n **__Konoha (木ノ葉隠れの里)__**\n \`\`\`diff\n- Konoha (木ノ葉隠れの里, Konohagakure no Sato) est le village caché de la Feuille. Tout comme les villages cachés des cinq autres grands pays, le village de Konoha est dirigé par un kage, en l'occurrence le Hokage. Le bandeau frontal des ninjas de Konoha est frappé d'une feuille stylisée. Cette feuille symbolise les méthodes d'apprentissage qui étaient dispensées aux aspirants ninjas des précédentes générations : une feuille était posée sur leurs fronts et ils devaient la faire tourner afin d'accroître leur concentration et de développer leur maîtrise de soi.\`\`\`\n ``` ``` \n https://media1.tenor.com/images/bcfbaa4f6dbce9e605775c5cb927ad44/tenor.gif?itemid=14801470",


]


module.exports.run = (client, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)];

        message.reply(answer)
};

module.exports.help = {
    name: 'nrp!village'
};
