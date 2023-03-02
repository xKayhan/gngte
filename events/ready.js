const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
 client.user.setActivity(`+yardım🔥+300k KULLANICI🔥`, { type:'PLAYING' })
  
  console.log("A.Kayhan Code Systems")
});

const log = message => {
  console.log(` ${message}`);
}; 
require('./util/eventLoader.js')(client);