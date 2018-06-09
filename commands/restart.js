exports.run = (Discord, client, message, args, footer, randomColor) => {
    if(message.author.id === '178350684922576896') {
 // EMBED
 var embedrestart = new RichEmbed()
 .setColor(randomColor)
 .setFooter(footer)
 .setTitle("Bot is shutting down!")
 await message.channel.send(embedrestart); // send the embed
 // unload all commands before shutting down

 // you can always leave out this code // (cmd part)
 client.commands.forEach( async cmd => {
   await client.unloadCommand(cmd);
 }); // end of cmd function

 // shut down the bot
 process.exit(1);
}; // end of code

  }; (message.author.id !== '178350684922576896'); then 
  var embedrestartnoperm = new Discord.RichEmbed()
      .setTitle("Restricted")
      .setDescription("Sorry, this command is restricted and you don't seem to have access!")
      .setColor(randomColor)
      .setFooter(footer)
  message.channel.sendEmbed(embedrestartnoperm)


