const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "Halo 👋\n\nSilakan buka aplikasi Absensi BPJS langsung dari HP Anda.\n\nJika aplikasi belum terbuka, pastikan sudah terinstall."
  );
});
