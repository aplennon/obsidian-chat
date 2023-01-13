const { commands } = require("obsidian");

commands.register("chat", async () => {
  const userInput = await commands.getInput("What would you like to say?");
  console.log(`You said: ${userInput}`);
});