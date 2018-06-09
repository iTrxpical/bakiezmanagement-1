exports.run = (Discord, client, message, args, footer, randomColor) => {

function userInfo(user) {
    var finalString = '';

    // Name
    finalString += '**' + user.username + '**, and their **ID** is **' + user.id + '**';

    // Account creation date
    var userCreated = user.createdAt.toString().split(' ');
    finalString += 'They have sent ** ' + userData[user.id].messagesSent + 'messages** in this server!'
}

var embeduserinfo = new Discord.RichEmbed()
    .setColor(randomColor)
    .setFooter(footer)
    .setTitle(user.username)
    .addField(finalString, true)
    .addField(userCreated, true)
message.channel.sendEmbed(embeduserinfo)
}