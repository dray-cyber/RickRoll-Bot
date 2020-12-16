import discord
import ffmpeg

client = discord.Client()
@client.event
async def on_message(message):
    x = message.content.split(" ")
    x1 = x[0]
    if x1.lower() == 'rickroll':
        x3 = message.content.lower().split("rickroll <@")
        x4 = x3[1]
        x5 = x4.split(">")
        x6 = x5[0]
        user = await message.guild.fetch_member(x6)
        while True:
            voice_channel = user.voice.channel
            channel = None
            if voice_channel != None:
                channel = voice_channel.name
                vc = await voice_channel.connect()
                vc.play(discord.FFmpegPCMAudio(executable="C:/ffmpeg/bin/ffmpeg.exe", source="Rick.mp3"))
                break
    try:
        if message.content.lower() == 'rick':
            voice_channel = message.author.voice.channel
            channel = None
            if voice_channel != None:
                await message.channel.send("Never Gonna Give You Up")
                channel = voice_channel.name
                vc = await voice_channel.connect()
                vc.play(discord.FFmpegPCMAudio(executable="C:/ffmpeg/bin/ffmpeg.exe", source="Rick.mp3"))
        if message.content.lower() == 'disconnect':
            await message.reply("no")
        if message.content.lower() == '.leave':
            await message.guild.voice_client.disconnect()
    except:
        await message.channel.send("Somethings not right I can sense it")
client.run('get your own token')
