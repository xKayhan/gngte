const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, msg, args) => {
  

  msg.reply(new Discord.MessageEmbed().setDescription("**Destek Sunucusu:** [  🛠️  ](https://discord.gg/H46amF5GUh)\n\n**Botu ekle:** [  ⏳  ](http://gg.gg/Gangte)"));

        }


exports.conf = {
  aliases: []
};

exports.help = {
  name : "yardım"
};