module.exports ={
  name: "announce",
  category: "moderation",
  usage: "{prefix}announce [channelID] (text) {title:Announcement}{description:This is an announcement}",
  code:`



$djsEval[const msg = "$message";


const c = msg.match(/\\[(.*?)\\]\\s+\\((.*?)\\)\\s+(.*)/)

msg;true]
  `
  
}