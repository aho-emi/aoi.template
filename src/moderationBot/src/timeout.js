module.exports = {
  name: "timeout",
  description: "This will timeout the specified user till the specified time.",
  category: "moderation",
  usage: "{prefix}timeout @user 1h reason",
  code:`
  
$description[<@$get[user]> has been timeouted for $message[2]]
$color[Green]

$timeoutMember[$guildID;$get[user];$message[2];false;$messageSlice[2]]

  
$onlyIf[$rolePosition[$userHighestRole[$authorId;$guildID;id]]<$rolePosition[$userHighestRole[$get[user];$guildID;id]];{newEmbed:{description:Given user has higher position than you. Cannot timeout!}{color:Red}}]

$onlyIf[$authorID!=$get[user];{newEmbed:{description:You cannot timeout yourself.}{color:Red}}] 

$onlyIf[$get[user]!=;{newEmbed:{description:Please mention or provide id of user you want to timeout.}{color:Red}}]
  $onlyIf[$hasPerms[$guildId;$authorID;moderatemembers]==true;{newEmbed:{description:You need \`Moderate Members\` permission to do so.}{color:Red}}]

  
$let[user;$findMember[$message[1];false]]

`
}