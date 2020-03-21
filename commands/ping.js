module.exports.run = async (bot, message, arguments) => {

    message.channel("Pong" + (message.createdTimestamp - Date.now()) + "ms");

}

module.exports.help = {
    name: "ping"
}    