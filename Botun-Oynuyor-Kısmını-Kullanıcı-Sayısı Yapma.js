const Discord = require('discord.js'); //discord'u çekiyoruz.
const client = new Discord.Client(); //client alıyoruz.

client.on('ready', () => { //Bot hazırsa 
  console.log('   BOT Hazır'); //Konsola bot hazır yazdır
  const guild = client.guilds.cache.get("Sunucu id'si") //Burada client.guilds.cache.get yerine client.guilds.get deneyebilirsiniz.
  //Yaptığımız işlem sunucunun id'sini çekiyor ve guild'e yazdırıyor.
  client.user.setActivity(`Toplam Üyeler: ${guild.memberCount} Kişi!`);//Burada ise botun oynuyor kısmına yazı yazıyoruz.
  //guild.memberCount kısmındaki guild'i üstteki kısımdan atamıştık
  //memberCount ise sunucudaki kişi sayısını belirtiyor eğer sadece memberCount yazarsanız hata verir çünkü açıklamada sunucunun id'sini çekemez
});
