exports.run = (Discord, client, message, args, footer) => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedspam = new Discord.RichEmbed()
    if (message.channel.type === 'dm') {   
    .setColor(randomColor) //If you don't do random color, put a hex code in inverted commas with a # infront.
    .addField("You requested spam, here you go!") //Makes the field.
    .setFooter(footer)
    message.author.send(embedspam);
    }}
