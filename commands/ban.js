const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!banUser) return message.channel.send("Gebruiker is niet gevonden");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry jij kan dit niet doen");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet banen");

    var ban = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("#00a4db")
        .addField("baned gebruiker", banUser)
        .addField("Gebant door", message.author)
        .addField("Reden", reason);

    var banChannel = message.guild.channels.find(`name`, "straffen");
    if (!banChannel) return message.guild.send("Kan het kanaal niet vinden");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);


    return;
}

module.exports.help = {
    name: "ban"
}    