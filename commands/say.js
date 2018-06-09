exports.run = (Discord, client, message, args, footer, randomColor) => {
  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}