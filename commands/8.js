exports.run = (Discord, client, message, args, footer) => {
var fortunes = [
    "`As I see it, yes`",
    "`It is certain`",
    "`Signs point to yes`",
    "`Ask again later`",
    "`Most Likely`",
    "`Uhhh, not lookin' too good`",
    "`Couldn't predict the outcome of that, please try again`",
    "`You are unlucky, no`",
    "`As far as I can see, no`",
    "`I am currently unsure, please try again`"
] 
if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send("You did not enter a valid question.");
}
