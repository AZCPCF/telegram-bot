const { Telegraf } = require('telegraf')
const { calculator } = require('./functions')
const bot = new Telegraf('6487623750:AAHMzeRNPcbEvxmrE19KjrrrNMNEc_pFqqA')
bot.command('start', (ctx) => {
    ctx.reply('yo nigga ! welcome to calculator ;)')
})
bot.on('text', calculator)
bot.launch()
