

module.exports.run = async (bot, message, args) => {

    //  !tempban gebruiker tijd reden

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry je hebt hier geen toestemming voor");

    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send("Je maakt als volgt gebruik van het commando: !tempban (gebruiker) (tijd) (reden)")

    console.log(user);

}

module.exports.help = {
    name: "tempban"
}    