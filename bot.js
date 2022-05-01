require("dotenv").config();

const discord = require("discord.js")
const client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, 
             discord.Intents.FLAGS.GUILD_MESSAGES 
            ]
})

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

  const cron = require('cron');

  let scheduledNightMessage = new cron.CronJob('00 00 20 * * *', () => {
    // This runs every day at 10:30:00, you can do anything you want
      // Specifing your guild (server) and your channel
      const guild = client.guilds.cache.get('364028983693541376');
      const channel = guild.channels.cache.get('366136646623821826');
    channel.send('Bonne nuit(晚安) !\nhttps://www.youtube.com/watch?v=OjNpRbNdR7E\nUtiliser la commande -> !LoveChina');
    
});

let scheduledNoonMessage = new cron.CronJob('00 00 12 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
    // Specifing your guild (server) and your channel
    const guild = client.guilds.cache.get('364028983693541376');
    const channel = guild.channels.cache.get('366136646623821826');
  channel.send('Bonne appétit(良好的胃口) !\nhttps://www.youtube.com/watch?v=OjNpRbNdR7E\nUtiliser la commande -> !LoveChina ');
  
});

let scheduledMorningMessage = new cron.CronJob('00 00 06 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
    // Specifing your guild (server) and your channel
    const guild = client.guilds.cache.get('364028983693541376');
    const channel = guild.channels.cache.get('366136646623821826');
  channel.send('Bonne journée(好日子) !\nhttps://www.youtube.com/watch?v=OjNpRbNdR7E\nUtiliser la commande -> !LoveChina');
  
});


  // When you want to start it, use:
  scheduledMorningMessage.start()
  scheduledNoonMessage.start()
  scheduledNightMessage.start()
  // You could also make a command to pause and resume the job

})


client.on("message", msg => {

  if (msg.content === "balek") {
    msg.reply("https://tenor.com/view/the-rock-sus-eye-the-rock-gif-23171646");
   }

  if (msg.content === "!LoveChina") {
    msg.reply("https://i.kym-cdn.com/entries/icons/original/000/027/195/cover10.jpg");  
  }
  if (msg.content === "!test") {
    msg.reply("https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1280px-Flag_of_the_Republic_of_China.svg.png");  
    msg.reply("Taiwan est un pays ?\n!TaiwanOui pour oui\n!TaiwanNon pour non\nbalek");  
  }

  if (msg.content === "!TaiwanNon") {
    msg.reply("https://i.redd.it/k3dzo703mur71.png");
  }

  if (msg.content === "!TaiwanOui") {
    msg.reply("https://i.pinimg.com/originals/42/1e/2d/421e2de455f0918a369f67daada3590d.jpg");
  }

  if (msg.content === "ping") {
    msg.reply("pong");  
  }

  if (msg.content === "tching") {
    msg.reply("tchong");
  }
})

client.login(process.env.TOKEN)


