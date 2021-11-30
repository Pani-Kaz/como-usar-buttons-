const Discord = require("discord.js");
const config  = require("../config.json")

 
module.exports = {
    name: 'buttons',
    description: "Exemplo de como usar buttons",
    author: "Pani Kaz#88",
run: (client, message, args) => {

   const pani_1 = new Discord.MessageButton().setCustomId('1').setLabel('Nome que deseja').setStyle("PRIMARY")
   
     const pani_2 = new Discord.MessageButton().setCustomId('2').setLabel('Nome que deseja').setStyle("DANGER")
   

  
const row = new Discord.MessageActionRow().addComponents(pani_1, pani_2)
      
message.reply({content: "Escolha", components: [row]})
  
        const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 30000})




        collector.on('collect', async (m) => {
            
            if (m.user.id != message.author.id)
            return;
            if (m.customId === '1') {
              m.reply("Foi")


};
       if (m.customId === '2') {
              m.reply("Foi_2")


};
});
}
}
