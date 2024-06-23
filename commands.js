const { REST, Routes } =  require('discord.js');
const bot_token = "MTI1MjUwNzE2NDEzMjY0Mjg5Ng.GJE9H2.O2BiZUeAPun0o2fFPYF0ofm7K1RR-_9A9Hrtsc"
const CLIENT_ID = "1252507164132642896"

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
      name: 'short',
      description: 'takes long url, returns short url',
    },
  ];


  const rest = new REST({ version: '10' }).setToken(bot_token);

(async ()=>{
    try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})()


// node commands.js 