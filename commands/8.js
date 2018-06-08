exports.run = (Discord, client, message, args, footer, randomColor) => {
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
var ballembed =  new Discord.RichEmbed()

if (args[1]) then
.addField("fortunes[Math.floor(Math.random() * fortunes.length");
.setFooter(footer)
.setColor(randomColor)
if (!args[1]) then; message.channel.send("I do not understand your request.");
message.channel.send(ballembed);
}
