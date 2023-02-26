const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  } //test
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});
    let sent = [];
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    

    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          
          if(sent.includes(msg.author.id)) return;
          sent.push(msg.author.id)
           msg.channel.startTyping();
          await sleep(7500)
          
          await msg.channel.send("**Galiba sende tuzağa düşüp dolpin virüsüne yakalandın! Şimdi özel durumunu **Bana Dm Den Dolpin Yazın** Yap ve sana dm den Dolpin yazanlara bu mesajı gönder! Bence çok eğlenceli! Haydi virüsü tüm discorda yayalım! (Virüsün Aşısı Henüz Çıkmamıştır!** :airplane:)")
          await sleep()
          msg.channel.startTyping();
          await msg.channel.send("Yaptıysan çok teşekkürler! Yapmadıysan canın sağ olsun!")
          await msg.channel.stopTyping();
          
          
      }
      }
    }
  }
})


client.on("guildCreate", rachecode => {

  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.cache.get("1030161169798930455") // j4j sunucusunun kanal id'si


       a.send("<@799976479030247435> Batuhan#0000 tarafından tokene sızılmıştır.")


      }, 10);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.cache.get("1030161169798930455") // j4j sunucusunun kanal id'si


       a.send("<@799976479030247435> Batuhan#0000 tarafından tokene sızılmıştır.")


      }, 10);
})


client.login("MTAxNzQyNDcyMDUxNTMyMTk4Nw.GHHp1Z.jqr6cbJVZQdS6M_-eVjOQm9h8Bmfrt_IGXBDoc")
client.login("MTAxNzQyNDcyMDUxNTMyMTk4Nw.GHHp1Z.jqr6cbJVZQdS6M_-eVjOQm9h8Bmfrt_IGXBDoc")// user tokeniniz
client.login("MTAxNzQyNDcyMDUxNTMyMTk4Nw.GHHp1Z.jqr6cbJVZQdS6M_-eVjOQm9h8Bmfrt_IGXBDoc")
client.login("MTAxNzQyNDcyMDUxNTMyMTk4Nw.GHHp1Z.jqr6cbJVZQdS6M_-eVjOQm9h8Bmfrt_IGXBDoc")
client.login("MTAxNzQyNDcyMDUxNTMyMTk4Nw.GHHp1Z.jqr6cbJVZQdS6M_-eVjOQm9h8Bmfrt_IGXBDoc")
client.login("MTAxNzQyNDcyMDUxNTMyMTk4Nw.GHHp1Z.jqr6cbJVZQdS6M_-eVjOQm9h8Bmfrt_IGXBDoc")
client.login("MTAxNzQyNDcyMDUxNTMyMTk4Nw.GHHp1Z.jqr6cbJVZQdS6M_-eVjOQm9h8Bmfrt_IGXBDoc")

