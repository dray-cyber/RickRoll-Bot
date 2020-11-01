// For Who ever wants my code of a rick astley bot here we go written in node.js , discord.js you will need to do a few installs to get started
// npm install ytdl-core
// npm install ytdl
// npm install ffmpeg-static
// npm install ffmpeg
// npm install discord.js
// npm install node-opus
// npm install opusscript
// npm install youtube-search
// you will have to take your discord token from the developer menu, then from the bot you created copy and paste it into the ' ' it should look like 'token' but in reality its a long stream of numbers and letters
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
var search = require('youtube-search')

var opts = {
        maxResults: 1,
        key:'AIzaSyBEbXe64-um7yx3iXfgmfomk8VcTZOMa3M'
        }

client.on('message', async message => { // this script right here will detect if the message is caps or no caps
    var firstpartofmessage = message.content.split(" ")
    var firstpartofmessage1 = firstpartofmessage[0]
    var lowered = message.content.toLowerCase()
    var tester = lowered.includes('rick')
    var leavingmeh = lowered.includes('disconnect')
    if (tester === true) { // say rick or RICK or Rick it doesnt matter
        tester = false
        try {
            let voiceChannel = message.member.voice.channel;
            voiceChannel.join().then(connection => { // the line below this is the error "catcher" it will catch any errors
                const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // inside the ' is the youtube link it steals audio from
                const dispatcher = connection.play(stream);
                message.reply("Never Gonna Give You Up")
                }); // seals the statements
                } catch (e) {
                        message.reply("there was a slight error YOUR NOT IN A VOICE CHANNEL")
                }
                }; // seals statements

    if (leavingmeh === true) {
        let voiceChannel = message.member.voice.channel;
        try {
            voiceChannel.leave();
            leavingmeh = false
        } catch (e) {
        console.log("eh")
        }
        message.reply("Disconnected")
        };
    if (firstpartofmessage1.toLowerCase() === 'help') {
        message.reply("Hi I am Rick Astley your god, you can ask me to do things like disconnect me from a voice channel after play music with the play command like play never gonna give you up, you can also just say rick to play that specific song, the play command uses the youtube data api v3 and the npm package called youtube-search to find those videos, I then filter it then sing it to you in a voice channel, and of course you can say help for help.")
    }
    if (firstpartofmessage1.toLowerCase() === 'play') {
        var secondpart = firstpartofmessage[1]
        var theusable = message.content.slice(5)
        try {
             search(theusable, opts, function(err, results) {
                if(err) return message.reply("Now I am assuming you either a messing with me with a stupid video name, or your not in a voice channel")
                var allthedata = JSON.stringify(results, null, 1)
                var sliced = allthedata.slice(39)
                var theone = sliced.split(' ')
                var thewinner = theone[0]
                var testingthis = thewinner.split('",')
                var also = testingthis[0]
                var thevideo = "'" + also + "'"
                let voiceChannel = message.member.voice.channel;
                voiceChannel.join().then(connection => { // the line below this is the error "catcher" it will catch any errors
                    const stream = ytdl(thevideo); // inside the ' is the youtube link it steals audio from
                    const dispatcher = connection.play(stream);
                    message.reply("I'll play your video in a moment")
                    })
                            }) // seals the statements
             } catch (err) {
                    var thisthing = e.startsWith('TypeError')
                    if (thisthing === true) {
                    console.log("no voice channel")
                    } else {
                    console.log("invalid video")
                    }
                    }
        }
});

 client.login('NzUwMTM3NDMzOTQwODIwMDM4.X02J7Q.F2JHjl5typto5_74Bmj99zRwUvc');
