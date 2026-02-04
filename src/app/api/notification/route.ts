import { BrevoEmailNotificationService } from '@/infrastructure/brevo/BrevoEmailService';
import { NextResponse, NextRequest } from 'next/server';
// import TelegramBot from 'node-telegram-bot-api';
// const chatidDavish = process.env.CHAT_ID_DAVISH || "";
// const secretTelegram = process.env.TELEGRAM_BOT_TOKEN || "";

// const bot = new TelegramBot(secretTelegram, { polling: false });

export async function POST(request: NextRequest){
    const origin = request.headers.get('origin');
    const allowedOrigins = ["http://localhost:3000"];

    if (!origin || !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 403,
        }); 
    }
    const body = await request.json()
    let sendNotification = new BrevoEmailNotificationService();
    await sendNotification.sendMessage(body.message);
    return new NextResponse(null, {
        status: 200,
    });
}