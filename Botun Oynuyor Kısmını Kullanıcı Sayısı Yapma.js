const Discord = require('discord.js'); //discord'u çekiyoruz.
const client = new Discord.Client(); //client alıyoruz.
const ayarlar = require("./ayarlar.json")//ayarları çekiyoruz

client.on('ready', () => {
    console.log(`   ++_bot aktif!_++`); //logluyoruz
    const guild = client.guilds.cache.get("Sunucu id");// burada hangi sunucunun bilgilerini çekiceksek onu giriyoruz
    client.user.setActivity(`Sunucudaki ${guild.memberCount} kişiyi`,{type:"WATCHING"});//burada ise botun oynuyor kısmı ayarlanıyor guild.membercount sunucudaki kişi sayısı oluyor.
});

client.on('guildMemberAdd', member =>{//sunucuya birisi girerse updatelenecek!
    const guild = client.guilds.cache.get("Sunucu id");
    client.user.setActivity(`Sunucudaki ${guild.memberCount} kişiyi`,{type:"WATCHING"});
});
client.on('guildMemberRemove', member =>{
    const guild = client.guilds.cache.get("Sunucu id");//sunucudan birisi çıkarsa updatelenecek!
    client.user.setActivity(`Sunucudaki ${guild.memberCount} kişiyi`,{type:"WATCHING"});
});

client.login(ayarlar.token)//Burada hangi botun çalıştırıcağını ayarlıyabalirsiniz
