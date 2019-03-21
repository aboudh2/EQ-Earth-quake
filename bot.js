const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-"
  

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`pixel Bot- Script By : Hamo-zine-lizer`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Zine-Hamo-lizer ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help | ${client.guilds.size} Servers `,"http://twitch.tv/Pixel Bot")
client.user.setStatus("dnd")
});

client.on('message', message => {
var prefix = "$";
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**!bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on('message', message => {
    if (message.content === 'باك') {
        message.reply(' ۏڷــګــمۘ ۛ ּمۘــڼۨــﯡڕ ּڀــ؏ــڛۜــڵ: :️');
      }
});


client.on('message', message => {
    if (message.content === 'الرابط') {
        message.reply('https://discord.gg/QHEtP4C');
      }
});


client.on('message', message => {
    if (message.content === 'الشعار') {
        message.reply('き  في اللعبة
');
      }
});

client.on('message', message => {
    if (message.content === 'الشعار') {
        message.reply('!෴Eq㍿ في الدسكورد
');
      }
});


client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});


client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});


client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});




client.login(process.env.BOT_TOKEN); 
