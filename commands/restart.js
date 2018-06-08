exports.run = (Discord, client, message, args, footer, randomColor) => {
    if(message.author.id === '178350684922576896') {
      message.channel.send('Restarted!');
      
      setInterval(function(){ process.exit(); }, 3000);
      
    

  } else {
      
      return;
      
}}   
