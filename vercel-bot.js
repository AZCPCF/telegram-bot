// vercel-bot.js
const { createServer } = require('http');
const { parse } = require('url');
const micro = require('micro');
const { Telegraf } = require('telegraf');

const bot = new Telegraf('6487623750:AAHMzeRNPcbEvxmrE19KjrrrNMNEc_pFqqA');

bot.command('start', (ctx) => {
  ctx.reply('Hello! I am your Vercel Bot.');
});

const server = createServer(async (req, res) => {
  const { pathname } = parse(req.url, true);

  if (pathname === '/webhook') {
    // Handle Telegram API requests here
    await bot.handleUpdate(req.body, res);
    res.end('');
  } else {
    res.end('Hello, Vercel!');
  }
});

module.exports = micro(server);
