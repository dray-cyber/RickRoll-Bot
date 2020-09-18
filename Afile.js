const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
// For Who ever wants my code of a rick astley bot here we go written in node.js , discord.js you will need to do a few installs to get started
// npm install ytdl-core
// npm install ytdl
// npm install ffmpeg-static
// npm install ffmpeg
// npm install discord.js
// you will have to take your discord token from the developer menu, then from the bot you created copy and paste it into the ' ' it should look like 'token' but in reality its a long stream of numbers and letters
const Token = 'your token'

client.on('message', async message => { // this script right here will detect if the message is caps or no caps
    if (message.content.toLowerCase() === 'rick') { // say rick or RICK or Rick it doesnt matter
            let voiceChannel = message.member.voice.channel;
// however the spacing does matter it cant be like rick a or rick b For I dont know how to do that
            message.reply("Never Gonna Give You Up")
            voiceChannel.join().then(connection => { // the line below this is the error "catcher" it will catch any errors
                process.on('unhandledPromiseRejectionWarning', error => console.error('Uncaught Promise Rejection', error));
                const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // inside the ' is the youtube link it steals audio from
                const dispatcher = connection.play(stream); // another error handler below just because Im new to node literally wrote this in 5 days
                process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
}); // seals the statements
}; // seals statements
}); // seals the final statement
 client.login(Token);
