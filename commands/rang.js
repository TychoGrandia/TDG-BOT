const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("**__Rangen__** \n\n `Supporter` - Kan je krijgen door mensen te inviten \n `TDG Squad` - Speel een potje fortnite met mij wat op youtube komt \n `Staff` - Ticket (only) \n `Moderator` - Ticket (only) \n `Developer` - Ticket (only)  ");

}

module.exports.help = {
    name: "rang"
}    