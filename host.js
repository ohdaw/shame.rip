const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    client.user.setActivity(`loser.gg`, {
        type: 'STREAMING',
        url: 'https://twitch.tv/losercordian',
    });
});

client.login(process.env.TOKEN);
