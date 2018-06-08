exports.run = (Discord, client, message, args, footer, randomColor) => {
    var story = [
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
var selected = (story[Math.floor(Math.random() * story.length)]);
var embedstory = new Discord.RichEmbed()
    .addField(selected)
    .setColor(randomColor)
    .setFooter(footer)
message.channel.sendEmbed(embedstory)
    }