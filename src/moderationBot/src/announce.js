module.exports ={
  name: "announce",
  category: "moderation",
  usage: "{prefix}announce [channelID] (text) {title:Announcement}{description:This is an announcement}",
  code:`



$replaceText[$messageSlice[1];\) \{;|]
  `
  
}