exports.run = (Discord, client, message, args, footer, randomColor) => {
    if(message.author.id === '178350684922576896') {
      resetBot(message.channel);
      function resetBot(channel) {
          message.react('✅')
              .then(message => client.destroy())
              .then(() => client.login(process.env.BOT_TOKEN));
          message.channel.send("``Bot was successfully restarted!``")
  } if(!message.author.id === '178350684922576896') return;
      
}}
