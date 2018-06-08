exports.run = (Discord, client, message, args, footer, randomColor) => {
    var embedspam = new Discord.RichEmbed()
    if (message.channel.type === 'dm') then   
    .setColor(randomColor) //If you don't do random color, put a hex code in inverted commas with a # infront.
    .addField("You requested spam, here you go!") //Makes the field.
    .setFooter(footer)
    message.author.send(embedspam);
    }
