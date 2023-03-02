const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/853605844750303262/909509989184454686/350kb.gif")
    .setColor("#00ee00")
    .setDescription("<:moderator:851547103146672178> <a:cevher:851031610060177408> <:owner:851030837612380182>  <@703961941831450655> **║ [[BETA🌍Web Sitesi]](https://gangte.glitch.me)** ")
    .setFooter(" © 2021 💶Gangte Bot")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: "yapımcım"
};
