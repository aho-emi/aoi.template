module.exports = {
  name: "kick",
  description: "This will kick the specified user from the guild.",
  category: "moderation",
  usage: "{prefix}kick @user reason",
  code:`

$description[Kicked <@$get[user]>!]
$color[Green]
$kick[$guildID;$get[user];$messageSlice[1]]

  
$onlyIf[$rolePosition[$userHighestRole[$authorId;$guildID;id]]<$rolePosition[$userHighestRole[$get[user];$guildID;id]];{newEmbed:{description:Given user has higher position than you. Cannot kick!}{color:Red}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID;$guildID;id]]<$rolePosition[$userHighestRole[$get[user];$guildID;id]];{newEmbed:{description:Given user has higher position than me. Cannot kick!}{color:Red}}]

$onlyIf[$authorID!=$get[user];{newEmbed:{description:You cannot kick yourself.}{color:Red}}] 

$onlyIf[$get[user]!=;{newEmbed:{description:Please mention or provide id of user you want to kick.}{color:Red}}]
  $onlyIf[$hasPerms[$guildId;$authorID;kickmembers]==true;{newEmbed:{description:You need \`Kick Members\` permission to do so.}{color:Red}}]

$onlyIf[$hasPerms[$guildId;$clientID;kickmembers]==true;{newEmbed:{description:I do not have \`Kick Members\` permission in order to kick people.}{color:Red}}

$let[user;$findMember[$message[1];false]]
$suppressErrors[Something went wrong!]
  `
}