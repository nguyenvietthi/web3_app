// pages/api/config.js
export default function handler(req, res) {
    res.status(200).json({
      botToken: process.env.NEXT_PUBLIC_BOT_TOKEN,
      chatId: process.env.NEXT_PUBLIC_CHAT_ID
    });
  }
  