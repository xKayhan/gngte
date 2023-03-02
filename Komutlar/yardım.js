const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("© 2022 Gangte Bot")
.setImage("https://cdn.discordapp.com/attachments/853605844750303262/909509989184454686/350kb.gif")

.setThumbnail("https://cdn.discordapp.com/attachments/853605844750303262/909510356928442408/gangte.png")
    .setDescription(`

[**[BETA🌍Web Sitesi]**](https://gangte.glitch.me)**
╔════════════════════════════╗
║                **YETKİLİ KOMUTLARI**
║>**+ban**   Sunucudan bir üyeyi yasaklar.
║**+unban** İstediğiniz kişinin banını kaldırır.
║**+kick**  Sunucudan bir üye kickler.
║**+sil**          Belirli bir kanaldaki mesajları siler.
║**+mute**         Kişiye chat/voice mute atılır.
║**emojiekle**         Emoji linki ve simini yazdığınızda emojiyi sunucuya ekler. 
║═════════════════════════════
║             **KULLANICI KOMUTLARI**
║**+git**          Etiketlenen kişi izin verirse yanına gidersiniz.
║**+çek**          Etiketlenen kişi izin verirse yanınıza gelir.
║**+afk**          AFK kalırsınız etiketlendiğinizde sebebi yazar.
║**+atatürk**          MUSTAFA KEMAL ATATÜRK'ün resmini gönderir.
║**+espiri**          Size küçük espiriler yapar.
║**+yapımcım**          Botu yapan kişiyi belirtir.
║**+toplamkomut**          Botda toplam kaç komut olduğunu gösterir.
║**+oylama**          Emojili oylama paleni açar.
║**+id**          Etiketlediğiniz kişinin idsini verir.
║**+botbilgi**          Botun aktif bilgisini verir.
║**+sunucubilgi**          Sunucu hakkında detaylı bilgi verir.
║**+sunucuresmi**          Sunucunun resmini gösterir.
║**+slots**          Slots oyunu.
║**+stresçarkı**          Stres çarkı!
╚════════════════════════════╝
`)
       .addField( `**╔══════════◥◣❖◢◤═══════════╗**`,
`**║ [👉🏽Botu Davet Et👈🏽](https://discord.com/oauth2/authorize?client_id=992457701131026453&permissions=8&scope=bot)**
**║ [[BETA🌍Web Sitesi]](https://gangte.glitch.me)**
**║ [👉🏽Destek Sunucusu👈🏽](https://discord.gg/cUWCJExmrD)**
**╚══════════◥◣❖◢◤═══════════╝**
   `)     
	.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: '',
    usage: ''
  };