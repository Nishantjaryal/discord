



const  { Client, GatewayIntentBits } =  require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const bot_token = "MTI1MjUwNzE2NDEzMjY0Mjg5Ng.GJE9H2.O2BiZUeAPun0o2fFPYF0ofm7K1RR-_9A9Hrtsc"
let prev_message = "first type a valid url and send then run command /short"



function getShorturl(link){
  
}



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});


client.on('messageCreate', (message) => {

  if(message.author.bot) return



  if (message.content === "hey" || message.content ===  "hi" || message.content === "hello"){
    message.reply({
    content:"Hi From Bot, I am powered by JavaScript"
  })
  }


  const link = message.content.split("short ")[1]
  if(link){
    const short_url = getShorturl(link)
    message.reply({
      content:short_url
    })
  }


  // console.log(message.content);

});





 
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  // console.log(interaction);

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === 'short') {
    let ShortUrl_message = "i will shortly think and develop a solution that what should i can do with this command"
    await interaction.reply(ShortUrl_message);
  }
});

client.login(bot_token)


