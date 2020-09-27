const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", function () {
    console.log('logged in as ${client.user.tag}!');
});

client.on("message", function (msg) {
    if (msg.content.startsWith("-play")) {
        msg.suppressEmbeds(true).catch(console.log);
    }
});

client.login(process.env.TOKEN);
