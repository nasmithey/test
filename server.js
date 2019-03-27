const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");
const RC = require('reaction-core')
const handler = new RC.Handler()
const fs = require("fs");


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
       client.user.setActivity(`Spotify`, {type: "listening"});
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);

});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

});


///STATUS===============================================================================================================



///CONSTANTS=============================================================================================================




client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const eco = require("discord-economy")
  const UserID = require("discord-economy")
  const toAdd = require("discord-economy")
  const NUMBER = require("discord-economy")

  
  
  
  
  ///COMMANDS===============================================================================================================
 
    

  
  

  
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
 

    if(command === "wtf") {
    if(!message.member.roles.some(r=>["Moderator", "Community Owner", "Nathan"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
        message.delete().catch(O_o=>{});   
    const m = await message.channel.send("https://cdn.discordapp.com/attachments/490196790281371678/497644369281548289/image0.png");
  }
  
      if(command === "joke") {
        message.delete().catch(O_o=>{});   
    const m = await message.channel.send(`my life`);
  }

  
  if(command === "help") {
        message.delete().catch(O_o=>{});
     message.author.send(`This bot is currently under development.`)
  const m = await message.channel.send("**Check your DMs!**")
  }
  
  

  
  
  if(command === "dl") {
    if(!message.member.roles.some(r=>["Admin", "Community Owner", "Nathan"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
        message.delete().catch(O_o=>{});   
    const m = await message.channel.send("https://media.discordapp.net/attachments/487022342271401994/504142935974084608/unknown.png?width=226&height=301");
  }
  
  
  
    if(command === "idk") {
    if(!message.member.roles.some(r=>["Board of Directors", "Community Owner", "Nathan"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
        message.delete().catch(O_o=>{});   
    const m = await message.channel.send("https://www.tenor.co/0t6K.gif");
  }
  

  
 
  
  //MODERATION MODERATION MODERATION MODERATION MODERATION
  
  
  
  
  if(command === "say") {
          message.delete().catch(O_o=>{});
    if(!message.member.roles.some(r=>["Administrator", "Community Owner", "Daddy", "Nathan"].includes(r.name)) )
      return message.channel.send("I find your lack of faith disturbing.");
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});   
    message.channel.send(sayMessage);
  }
   
  
  
  
 if(command === "mute") {
  let reason = args.slice(1).join(' ');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  let logchannel = message.guild.channels.find('name', 'logs');

   message.delete().catch(O_o=>{}); 
   if(!message.member.roles.some(r=>["Moderator", "Administrator", "Community Directors", "Co Owner", "Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
           if(user.hasPermission("MANAGE_ROLES")) return message.reply("You can't mute a moderator!");
     let role = message.guild.roles.find(r => r.name === "Muted");

  // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
  let member = message.mentions.members.first();

  member.addRole(role).catch(console.error);
    message.delete().catch(O_o=>{}); 
   
  const embed = new Discord.RichEmbed()
  .setColor(0xffa500)
  .setTimestamp()
  .addField('Action:', 'Mute')
  .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Moderator:', 
  `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  message.channel.send(`User muted. :mute:`)
   return client.channels.get(logchannel.id).send({embed});
  };
  
  
  
  

  if(command === "unmute") {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let logchannel = message.guild.channels.find('name', 'logs');
    if(!message.member.roles.some(r=>["Moderator", "Administrator", "Community Directors", "Co Owner", "Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
     let role = message.guild.roles.find(r => r.name === "Muted");

  // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
  let member = message.mentions.members.first();

  // or the person who made the command: let member = message.member;



  // Remove a role!
  member.removeRole(role).catch(console.error);
    message.delete().catch(O_o=>{}); 
  const embed = new Discord.RichEmbed()
  .setColor(0x008000)
  .setTimestamp()
  .addField('Action:', 'Unmute')
  .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Moderator:', 
  `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  message.channel.send(`User unmuted.`)
   return client.channels.get(logchannel.id).send({embed});
  }
  
  
  
  
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Co Owner", "Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("An error occured.");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  
  
  
  if(command === "ban") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Owner", "Co Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permission to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("User doesn't exist!");
    if(!member.bannable) 
      return message.reply("An error occured.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  
  
  
  if(command === "purge") {
  
      let logchannel = message.guild.channels.find('name', 'logs');
    // This command removes all messages from all users in the channel, up to 100.
        if(!message.member.roles.some(r=>["Administrator", "Moderator", "[SENIOR STAFF]", "Community Owner", "Daddy", "Nathan"].includes(r.name)) )
      return message.reply("Sorry, you don't have permission to use this!");
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 1000)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    const m = await message.channel.send(`Nuked the messages. :bomb:`);
    
     const embed = new Discord.RichEmbed()
  .setColor(0xffff00)
  .setTimestamp()
  .addField('Action:', 'Purge')
  .addField('Messages deleted:', deleteCount)
  .addField('Moderator:', 
  `${message.author.username}#${message.author.discriminator}`);
   return client.channels.get(logchannel.id).send({embed});
    
    
    
  }
    if(command === "warn") {
      let reason = args.slice(1).join(' ');
      let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      let logchannel = message.guild.channels.find('name', 'logs');
          message.delete().catch(O_o=>{});
    // This command removes all messages from all users in the channel, up to 100.
        if(!message.member.roles.some(r=>["Administrator", "Moderator", "[SENIOR STAFF]", "Community Owner", "Daddy", "Nathan"].includes(r.name)) )
      return message.reply("Sorry, you don't have permission to use this!");
    // get the delete count, as an actual number.
        if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't warn a moderator!");

    message.delete().catch(O_o=>{}); 
  const embed = new Discord.RichEmbed()
  .setColor(0xffff00)
  .setTimestamp()
  .addField('Action:', 'Warn')
  .addField('User:', `${wUser.username}#${wUser.discriminator} (${wUser.id})`)
  .addField('Moderator:', 
  `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  message.channel.send(`User warned. :warning:`)
   return client.channels.get(logchannel.id).send({embed});
      message.user.username.send(`You have been warned for ${reason}`);

    
    
  }

  
  });


///KEEPS IT ALIVE================================================================================================




client.login(config.token);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



