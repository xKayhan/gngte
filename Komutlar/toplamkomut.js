const Discord = require('discord.js')
exports.run = function(client, message, args) {
const embed = new Discord.MessageEmbed()
.setTimestamp()
.setImage("https://cdn.discordapp.com/attachments/853605844750303262/909509989184454686/350kb.gif")
.setFooter(`${message.author.tag} Tarafından İstendi. `)
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
return message.channel.send(embed)

};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'toplam-komut', 
    description: '', 
    usage: 'toplam-komut'
};