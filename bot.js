// const { Telegraf } = require('telegraf')
// const { calculator } = require('./calculator')
// const bot = new Telegraf('6487623750:AAHMzeRNPcbEvxmrE19KjrrrNMNEc_pFqqA');

// // Command to initiate translation
const commands = [
    {
        command: 'start',
        function: (ctx) => {
            ctx.reply('welcome to my AZCPCF test bot')
        }
    },
    {
        command: 'calculator',
        function: calculator()
    }
]
// for (const command of commands) {
//     bot.command(command.command, command.function)
// }
// // bot.command('start',(ctx) => {ctx.reply('hello world')})
// // console.log('first')
// bot.launch()

// // Handle text messages (math expressions)
const { Telegraf } = require('telegraf');
const { handleStartCommand, handleRestartCommand, handleTextMessage } = require('./calculator');

const bot = new Telegraf('6487623750:AAHMzeRNPcbEvxmrE19KjrrrNMNEc_pFqqA');

// Command to start the calculator
bot.command('start', handleStartCommand);

// Handle text messages (math expressions)
bot.on('text', handleTextMessage);

// Start the bot
bot.launch();
