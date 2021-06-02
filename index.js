require("dotenv/config");
const Github = require("gitcord");
const Discord = require("discord.js");
const client = new Discord.Client();
const github = new Github("tovade", {
  token: process.env.github_token, //optional but recommened
  repositories: ["github-notifier"],
});
github.setup();

client.on("ready", () => {
  console.log("I am not online :D");
});

github.on("newEvent", (embed) => {
  client.channels.cache.get("CHANNEL ID").send({ embed });
});

client.login(process.env.bot_token);
