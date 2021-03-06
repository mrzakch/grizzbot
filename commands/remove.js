//Settings
exports.alias = ["remove", "removerole"]; //Commands equivalents

exports.arguments=["@user","role"];

exports.isAdmin = true; //Must be admin to use?

exports.helpText = "Remove a certain role from a user.";

//Requirements
var main = require('../main.js');
const Discord = require('Discord.js');

//Command
exports.command = async function (message, args, temptotals, exp) {
    if (!message.mentions.members.first())
        return message.reply("Invalid mentions");
    args.shift();
    var rname = args.join(" ");
    if (!message.mentions.members.first().roles.some(r => r.name === rname))
        return message.reply("That user doesn't have that role!");
    var role = message.guild.roles.find(r => r.name === rname)
    message.mentions.members.first().removeRole(role).catch(console.log);
    return message.channel.send("<@" + message.mentions.members.first().id + "> has had the role removed.");
}

exports.category="Misc";