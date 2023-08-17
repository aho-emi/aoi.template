module.exports = {
  name: "untimeout",
  description: "This will remove the timeout from the specified user.",
  category: "moderation",
  usage: "{prefix}untimeout @user reason",
  code:`
  
$description[Lifted timeout from <@$get[user]>]
$color[Green]

$timeoutMember[$guildID;$get[user];1s;false;$messageSlice[1]]

$onlyIf[$get[user]!=;{newEmbed:{description:Please mention or provide id of user you want to timeout.}{color:Red}}]
  $onlyIf[$hasPerms[$guildId;$authorID;moderatemembers]==true;{newEmbed:{description:You need \`Moderate Members\` permission to do so.}{color:Red}}]

  
$let[user;$findMember[$message[1];false]]

`
}