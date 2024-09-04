// pages/api/config.js
export const config = {
  runtime: 'edge', // Cấu hình để sử dụng Edge Runtime
};

export default function handler(req, res) {
  res.status(200).json({
    botToken: process.env.NEXT_PUBLIC_BOT_TOKEN,
    chatId: process.env.NEXT_PUBLIC_CHAT_ID,
  });
}
