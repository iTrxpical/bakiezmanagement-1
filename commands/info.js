exports.run = (Discord, client, message, args, footer, randomColor) => {

 //Just gets a random color. Feel free to not put this, I just like it lol.
    
    var embedinfo = new Discord.RichEmbed() // Makes the embed so we can send it.
    
        .setColor(randomColor)
        .addField("Info:", "This bot was created by **Askreno#2296** for the Bakiez Management Team. Props to **TheReal#1781** for getting it to be 24/7.")
        .setFooter(footer)
    message.channel.sendEmbed(embedinfo); //Sends the embed.
    }
    
