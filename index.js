const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "Halo 👋\n\nKlik tombol di bawah untuk membuka Absensi BPJS.\n\nJika aplikasi tidak terbuka otomatis, silakan login manual di HP Anda.",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📝 Buka Absensi BPJS",
              url: "https://www.bpjs-kesehatan.go.id"
            }
          ]
        ]
      }
    }
  );
});
