exports.run = (Discord, client, message, args, footer, randomColor) => {
var embednotice = new Discord.RichEmbed()
    .setColor(randomColor)
    .setFooter(footer)
    .addField("@message.author You have been noticed!", true)
    .addField("@message.author You have been noticed!", true)
message.channel.sendEmbed(embednotice)
}