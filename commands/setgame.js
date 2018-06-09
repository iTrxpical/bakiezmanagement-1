exports.run = (Discord, client, message, args, footer, randomColor) => {
if (message.author.id == "178350684922576896") {
    var nameResult = args.join(' ');
    if (!nameResult) nameResult = null;
    client.user.setActivity(nameResult, {type: "WATCHING"});
    var embedsetgame = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
    .setDescription(`${nameResult} is now my new Playing Game. (Set as WATCHING)`)
    .setColor(randomColor)
    .setFooter(footer)
    message.channel.send(embedsetgame)
    } else {
      let embedsetgamenoperm = new RichEmbed()
      .setTitle("This command is restricted to my Owner.")
      .setDescription("It is restricted to prevent abuse.")
      .setColor(randomColor)
      .setFooter(footer)
      message.channel.send(embedsetgamenoperm)
}}