const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**Tycho De Gamer `BOT`** \n\n **__Commands Everyone__** \n `!hallo` - Zeg hallo tegen de bot. \n `!doei` - Zeg doei tegen de bot. \n `!rang` - Krijg een lijst met rangen. \n `!botinfo` - Krijg info over de bot te zien. \n `!serverinfo` - Krijg info over de server te zien. \n\n **__DeveloperCommands__** \n `!kick` - Kick een gebruiker van de server. \n `!ban` - Ban een gebruiker van de server. \n `!mute` - Mute een gebruiker. \n `!clear` - Verwijder aantal tekst. \n `!warn` - Waarschuw een gebruiker. \n `!prefix` - Verander de prefix. ";

        message.author.send(text);

        message.channel.send("Je hebt een prive berichtje gekregen van mij!");

    } catch (error) {
        message.channel.send("Er is iets fouts gegaan");
    }

}

module.exports.help = {
    name: "help"
}    