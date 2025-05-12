const DBM = require('./bot.js');

// This tells Koyeb what your token is
process.env.TOKEN = process.env["Discord-Bot-Token"];

// Start the bot
DBM.Bot.init();

// Web server (required for Koyeb to know it's alive)
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Bot is running"));
app.listen(3000, () => console.log("Web server ready!"));
