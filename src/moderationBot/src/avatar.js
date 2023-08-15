module.exports = [{
  name: "avatar",
  aliases: "av",
  category: "moderation",
  usage: "{prefix}avatar @user",
  code:`

  $sendMessage[{newEmbed:{title:<@$get[user]>'s user avatar}{description:**Alternate Links**
[png]($userAvatar[$get[user];4096;true;png]) | [jpg]($userAvatar[$get[user];4096;true;jpg]) | [webp]($userAvatar[$get[user];4096;true;webp]) | [jpeg]($userAvatar[$get[user];4096;true;jpeg]) | [gif]($userAvatar[$get[user];4096;true;gif])}{timestamp}{image:$userAvatar[$get[user]]}}

$nonEscape[$if[$memberAvatar!={actionRow:{button:{Server Avatar:2:serverAvatar.$authorID.$get[user]:false}}}]]]

  $let[user;$findUser[$message[1]]]

  
  `
},{
  type: "interaction",
  prototype: "button",
  code:`

$sendMessage[{newEmbed:{title:<@$get[user]>'s server avatar}{description:**Alternate Links**
[png]($memberAvatar[$get[user];4096;true;png]) | [jpg]($memberAvatar[$get[user];4096;true;jpg]) | [webp]($memberAvatar[$get[user];4096;true;webp]) | [jpeg]($memberAvatar[$get[user];4096;true;jpeg]) | [gif]($memberAvatar[$get[user];4096;true;gif])}{timestamp}{image:$memberAvatar[$get[user]]}}

{actionRow:{button:{User Avatar:2:userAvatar.$authorID:false}}}]
  

  $let[user;$splitText[3]]
  $onlyIf[$authorId==$splitText[2]]
  $onlyIf[$splitText[1]==serverAvatar]
  $textSplit[$interactionData[customId];.]
  `
},{
  type: "interaction",
  prototype: "button",
  code:`

$sendMessage[{newEmbed:{title:<@$get[user]>'s user avatar}{description:**Alternate Links**
[png]($userAvatar[$get[user];4096;true;png]) | [jpg]($userAvatar[$get[user];4096;true;jpg]) | [webp]($userAvatar[$get[user];4096;true;webp]) | [jpeg]($userAvatar[$get[user];4096;true;jpeg]) | [gif]($userAvatar[$get[user];4096;true;gif])}{timestamp}{image:$userAvatar[$get[user]]}}

{actionRow:{button:{Server Avatar:2:serverAvatar.$authorID:false}}}]
  

  $let[user;$splitText[3]]
  $onlyIf[$authorId==$splitText[2]]
  $onlyIf[$splitText[1]==userAvatar]
  $textSplit[$interactionData[customId];.]
  `
}]