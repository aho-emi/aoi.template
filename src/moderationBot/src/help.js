module.exports = {
  name: "help",
  description: "This will return the help menu of bot.",
  code:`
  $author[$username[$clientID] - Help Panel: Moderation;https://media.discordapp.net/attachments/1022533781040672839/1140112182604992605/image0.jpg]


$description[All the moderation commands are listed below,

$getObjectProperty[cmdss]]
$color[Green]
$title[Total commands: $getObjectProperty[count]]
$footer[Template by team scrapz | Page - $getObjectProperty[currentPage]/$getObjectProperty[totalPage];https://media.discordapp.net/attachments/889006929383407647/1140919385272360960/Untitled96_20230812114043.png]

$createObject[$djsEval[const c = [];
d.client.cmd.default
  .filter(x => x.type === "default" && x.category === 'moderation')
  .map(x => c.push(\`- **\${x.description}**\\n\\\`  \${client.prefix[0]? client.prefix[0] : client.prefix}\${x.name}\\\`\\n\`));
to = 5;from = 0
b = c.slice(from, to).join('\\n')
g = {cmdss: b, count: c.length, totalPage: Math.ceil(c.length / to), currentPage: Math.floor(to/5)}
JSON.stringify(g);true]]
  
  
  
  
  `
}