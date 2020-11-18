import discord
from discord.ext import commands
import ffmpeg
client = discord.Client()

@client.event
async def on_message(message):
    try:
        if message.content.lower() == 'rick':
            voice_channel = message.author.voice.channel
            channel = None
            if voice_channel != None:
                message.channel.send("Never Gonna Give You Up")
                channel = voice_channel.name
                vc = await voice_channel.connect()
                vc.play(discord.FFmpegPCMAudio(executable="C:/ffmpeg/bin/ffmpeg.exe", source="C:/Users/Dray/Desktop/rick.mp3"))
        if message.content.lower() == 'disconnect':
            vc.disconnect()
    except:
        message.channel.send("Somethings not right I can sense it")

client.run('get your own token')
