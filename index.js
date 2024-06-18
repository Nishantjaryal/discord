const  { Client, GatewayIntentBits } =  require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const bot_token = "MTI1MjUwNzE2NDEzMjY0Mjg5Ng.GJE9H2.O2BiZUeAPun0o2fFPYF0ofm7K1RR-_9A9Hrtsc"






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});


client.on('messageCreate', (message) => {

  if(message.author.bot) return

  if (message.content === "hey" || message.content ===  "hi" || message.content === "hello"){
    message.reply({
    content:"Hi From Bot, I am powred by JavaScript"
  })
  }
  // console.log(message, message.content);

});





 
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  console.log(interaction);

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(bot_token)