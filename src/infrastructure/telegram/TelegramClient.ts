import TelegramBot from 'node-telegram-bot-api';
const secretTelegram = process.env.TELEGRAM_BOT_TOKEN || "";

export const bot = new TelegramBot(secretTelegram, { polling: false });

