const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Klik untuk buka aplikasi absensi:",
    {
      reply_markup: {
        inline_keyboard: [[
          {
            text: "📲 Buka Absensi",
            url: "intent://open#Intent;package=id.go.bpjsesehatan.ihc;end"
          }
        ]]
      }
    }
  );
});
