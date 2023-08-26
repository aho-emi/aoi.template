class GiveawayBot {
    constructor(args) {
        this.args = args;
        if (!args) {
            console.log("Client not Found!");
            process.exit(0);
        }
    }

    load() {
        const bot = this.args;

        // Load the functions
        const path = require("path");
        const { Handler } = require(path.join(__dirname, "..", "handler.js"));
        const commandPath = path.join(__dirname, "src");
        const handler = new Handler(bot);
        handler.loadCommands(commandPath);
      
        const fs = require('fs');

        const filename = 'giveaways.sql'; 
          if (!fs.existsSync(filename)) {
            fs.writeFileSync(filename, '{}', 'utf-8')}
    }
}

module.exports = {
    GiveawayBot
};