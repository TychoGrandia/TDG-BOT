const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen :}`)

        bot.commands.set(fileGet.help.name, fileGet);

    })

});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`);

    bot.user.setActivity("!help", { type: "LISTENING" });

});


bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: botConfig.prefix
        };
    }
    var prefix = prefixes[message.guild.id].prefixes;


    // var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);


    // if (command === `${prefix}hallo`) {


    //     return message.channel.send("Hallo");
    // }

    // if (command === `${prefix}info`) {

    //     var botIcon = bot.user.displayAvatarURL;

    //     var botEmbed = new discord.RichEmbed()
    //         .setDescription("Discord bot info")
    //         .setColor("#00a4db")
    //         .setThumbnail(botIcon)
    //         .addField("Bot naam", bot.user.username)
    //         .addField("Gemaakt op", bot.user.createdAt);

    //     return message.channel.send(botEmbed);
    // }


    // if (command === `${prefix}serverinfo`) {

    //     var icon = message.guild.iconURL;

    //     var serverEmbed = new discord.RichEmbed()
    //         .setDescription("Server info")
    //         .setColor("#00a4db")
    //         .setThumbnail(icon)
    //         .addField("Bot naam", bot.user.username)
    //         .addField("Je bent gejoind op", message.member.joinedAt)
    //         .addField("Totaal members", message.guild.memberCount);

    //     return message.channel.send(serverEmbed);

    // }

    // if (command === `${prefix}kick`) {    

    //     // !kick @Tycho De Gamer redenen hier.

    //     var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    //     if (!kickUser) return message.channel.send("Gebruiker is niet gevonden");

    //     var reason = arguments.join(" ").slice(22);

    //     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry jij kan dit niet doen");

    //     if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet kicken");

    //     var kick = new discord.RichEmbed()
    //         .setDescription("Kick")
    //         .setColor("#00a4db")
    //         .addField("Kicked gebruiker", kickUser)
    //         .addField("Gekickt door", message.author)
    //         .addField("Reden", reason);

    //     var kickChannel = message.guild.channels.find(`name`, "straffen");
    //     if (!kickChannel) return message.guild.send("Kan het kanaal niet vinden");

    //     message.guild.member(kickUser).kick(reason);

    //     kickChannel.send(kick);

    //     return;

    // }

    // if (command === `${prefix}ban`) {

    //     var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    //     if (!banUser) return message.channel.send("Gebruiker is niet gevonden");

    //     var reason = arguments.join(" ").slice(22);

    //     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry jij kan dit niet doen");

    //     if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet banen");

    //     var ban = new discord.RichEmbed()
    //         .setDescription("ban")
    //         .setColor("#00a4db")
    //         .addField("baned gebruiker", banUser)
    //         .addField("Gebant door", message.author)
    //         .addField("Reden", reason);

    //     var banChannel = message.guild.channels.find(`name`, "straffen");
    //     if (!banChannel) return message.guild.send("Kan het kanaal niet vinden");

    //     message.guild.member(banUser).ban(reason);

    //     banChannel.send(ban);


    //     return; 
    // }

});


bot.login(process.env.token);