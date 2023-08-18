module.exports = {
  name: "unban",
  description: "Unbans a user from the guild.",
  category: "moderation",
  usage: "{prefix}unban id reason",
  code:`

$description[Unbanned <@$get[user]>!]
$color[Green]
$unban[$guildID;$get[user];$messageSlice[1]]
  


$onlyIf[$get[user]!=;{newEmbed:{description:Please provide id of user you want to unban.}{color:Red}}]
  $onlyIf[$hasPerms[$guildId;$authorID;banmembers]==true;{newEmbed:{description:You need \`Ban Members\` permission to do so.}{color:Red}}]


$let[user;$findUser[$message[1];false]]
  `
}