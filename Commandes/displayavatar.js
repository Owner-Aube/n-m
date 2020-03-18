module.exports.run = (client, message, args) => {

    if (!message.mentions.users.size) {
        return message.channel.send(`**__Voici ton Avatar :__** ${message.author.displayAvatarURL}`);
    }
    
    const avatarList = message.mentions.users.map(user => {
        return `${user.username}'s avatar: ${user.displayAvatarURL}`;
    });
    
    message.channel.send(avatarList);
    }
    
    module.exports.help = {
        name: 'avatar'
    };