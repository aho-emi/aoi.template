class Mod {
    constructor(args) {
        this.args = args;
        if (!args) {
            console.log("Client not Found!");
            process.exit(0);
        }
    }

    load() {
        const bot = this.args;

        bot.variables(require('./variable.js'))

        // Load the functions
        const path = require("path");
        const { Handler } = require(path.join(__dirname, "..", "handler.js"));
        const commandPath = path.join(__dirname, "src");
        const handler = new Handler(bot);
        handler.loadCommands(commandPath);
    }
}

module.exports = {
    Mod,
};
