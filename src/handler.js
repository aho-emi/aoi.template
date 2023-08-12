const { readdirSync } = require("fs");

class FuncHandler {
  constructor(bot) {
    this.bot = bot;
  }

  loadFunctions(path) {
    const funcs = readdirSync(path);

    for (let func of funcs) {
      const f = func.split(".")[0];
      const o = require(`${path}/${func}`);

      try {
        this.bot.functionManager.createFunction({
          name: `$${f}`,
          type: "djs",
          code: o,
        });
      } catch (error) {
        console.error(`Error loading function ${f}: ${error}`);
      }
    }
  }

  loadFunctionsAoi(path) {
    const funcs = readdirSync(path);

    for (let func of funcs) {
      const f = func.split(".")[0];
      const o = require(`${path}/${func}`);

      try {
        this.bot.functionManager.createFunction(o);
      } catch (error) {
        console.error(`Error loading function ${f}: ${error}`);
      }
    }
  }
}

module.exports = FuncHandler;

