const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, params) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage("https://cdn.discordapp.com/attachments/853605844750303262/909509989184454686/350kb.gif")
  .setTitle(`${message.guild.name} Adlı Sunucunun Resmi`)
  .setImage(message.guild.iconURL())
  message.channel.send(embed)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucuresmi"],
}


exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucuresmi.',
  usage: '!sunucuresmi',
};