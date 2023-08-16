class MusicBot {
    constructor(args, soundCloud) {
        this.args = args;
        if (!args) {
            console.log("Client not Found!");
            process.exit(0);
        }
    }

    load() {
        const bot = this.args;

        const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

        const voice = new AoiVoice(bot, {
    searchOptions: {
        soundcloudClientId: soundCloud,
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});

      
        voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voice.bindExecutor(bot.functionManager.interpreter);

const path = require("path");
        const { Handler } = require(path.join(__dirname, "..", "handler.js"));
        const commandPath = path.join(__dirname, "src");
        const handler = new Handler(bot);
        handler.loadMusicCommands(voice, commandPath);
    }
}

module.exports = {
    MusicBot,
};
