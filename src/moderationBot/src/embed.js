module.exports ={
  name: "embed",
  category: "moderation",
  usage: "{prefix}embed {title:Announcement}{description:This is an announcement}",
  code:`

$sendMessage[{newEmbed:$nonEscape[$message]}]

  `
  
}