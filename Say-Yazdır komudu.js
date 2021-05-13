const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js'); //embed alıyoruz
const ayarlar = require("../ayarlar.json") //ayarlar dosyasından veri çekiyoruz

client.on('ready', () => { //bot hazırsa
    console.log(`   ++_yazdır aktif!_++`); //consola yazdır aktif yaz.
  });

var prx = ayarlar.prefix; //ayarlardan çekilen prefixi prx olarak ayarlıyoruz

client.on('message', message => { // bot hazırsa message'ı message olarak çalıştır
    if (message.content.startsWith(prx+'say')) { //çektiğimiz prefixi yani !,-,* gibi örnek: !say veya istediğiniz birşey
        if (message.author.bot) return; //mesaj oluşturan botsa 
        const SayMessage = message.content.slice(5).trim(); //burada 5 yazan yeri değiştirin benim botum --say olarak çalışıyo 5 harfli !say olsaydı 4 harfe düşerdi kendinize göre ayarlayın
        message.channel.send("**" + SayMessage + "**")//burada chate yazıyoruz 
        console.log(message.author.tag+' '+SayMessage+' --- Yazdırdı!')//buradada kişinin ismini alıp logluyoruz konsola ne yazdığıyla beraber
    }
});

 client.login(ayarlar.token);// ayarlar'dan çektiğimiz token
