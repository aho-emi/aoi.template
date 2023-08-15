module.exports = {
  name: "ban",
  category: "moderation",
  usage: "{prefix}ban @user reason",
  code:`

$description[Banned <@$get[user]>!]
$color[Green]
$ban[$guildID;$get[user];7;$messageSlice[1]]
  
$onlyIf[$rolePosition[$userHighestRole[$authorId;$guildID;id]]<$rolePosition[$userHighestRole[$get[user];$guildID;id]];{newEmbed:{description:Given user has higher position than you. Cannot ban!}{color:Red}}]

$onlyIf[$authorID!=$get[user];{newEmbed:{description:You cannot ban yourself.}{color:Red}}] 

$onlyIf[$get[user]!=;{newEmbed:{description:Please mention or provide id of user you want to ban.}{color:Red}}]
  $onlyIf[$hasPerms[$guildId;$authorID;banmembers]==true;{newEmbed:{description:You need \`Ban Members\` permission to do so.}{color:Red}}]


$let[user;$findMember[$message[1];false]]
  `
}