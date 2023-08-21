module.exports = [{
    name: "role create",
    code: `
$title[Role Creation]
$description[Click the button below to start the role creation modal.]
$footer[Requested by $username;$authorAvatar]
$color[Random]
$addTimestamp
$addButton[1;Create Role;primary;create_$authorID]

$onlyIf[$hasPerms[$guildID;$clientID;manageroles]==true;I do not have \`MANAGE_ROLES\` permission.]

$onlyPerms[manageroles;You don't have \`MANAGE_ROLES\` permission.]
`
}, {
    type: "interaction",
    prototype: "button",
    code: `
$editMessage[$interactionData[message.id];{newEmbed:{title:Role creation}{description:Role creation process has been initialised!}{color:Orange}{footer:Current status#COLON# pending/failed}}]

$interactionModal[Role name;role;{actionRow:{textInput:Role name:1:rolename:Enter role name:true::1:50}}{actionRow:{textInput:Role color:1:color:Enter the HEX value of color:true::7:7}}{actionRow:{textInput:Hoisted?:1:hoist:True/False:true::4:5}}{actionRow:{textInput:Role icon URL:1:icon:Icon url of role:false::10:200}}{actionRow:{textInput:Role position:1:position:The position of role from last (1 being the lowest):false::1:3}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You are not the author of this command!{extraOptions:{interaction}}{options:{ephemeral}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==create;]   
`
}, {
    name: "role",
    type: "interaction",
    prototype: "modal",
    code: `

$djsEval[
if (!isNan($textInputValue[position])) {
        $editMessage[$interactionData[message.id];{newEmbed:{title:Role creation}{description:Role creation process has failed!}{color:Red}{footer:Current status#COLON# failed}}]
        
        $interactionReply[;{newEmbed:{description:Role creation failed!\nReason:  Invalid position given as it isn't a number.}{color:Red}};;;everyone;true]
    } else if (isNaN($textInputValue[position])) {
$editMessage[$interactionData[message.id];{newEmbed:{title:Role creation}{description:Role creation process has been completed successfully!!}{color:Orange}{footer:Current status#COLON# success}}]
console.log("worked")
$interactionReply[;{newEmbed:{description:Role creation successfull!}{color:Green}};;;everyone;true]
    }
;false]

$log[$get[no]]

$let[rolecount;$math[$roleCount-$rolePosition[$userHighestRole[$authorID]]]]

$let[color;$replaceText[$textInputValue[color];#;]]

$let[icon;$replaceText[$replaceText[$checkCondition[$guildBoostLevel>=2];true;$textInputValue[icon]];false;]]

$let[no;$isNumber[$textInputValue[position]]]
`
}]
/*
the error i encounter is that whenever the id statement is executed, only the 2nd part that is else if or else will execute and thw if statement just interactionAlreadyResponded errors. 

the code isnt fully done yet but, this errors so, i want your help
*/