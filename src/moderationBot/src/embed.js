module.exports ={
  name: "embed",
  description: "This will create a embed in current channel",
  category: "moderation",
  usage: "{prefix}embed {title:Announcement}{description:This is an announcement}",
  code:`

$sendMessage[{newEmbed:$nonEscape[$message]}]

  `
  
}