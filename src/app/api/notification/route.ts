import { BrevoEmailNotificationService } from '@/infrastructure/brevo/BrevoEmailService';
import { NextResponse, NextRequest } from 'next/server';
// import TelegramBot from 'node-telegram-bot-api';
// const chatidDavish = process.env.CHAT_ID_DAVISH || "";
// const secretTelegram = process.env.TELEGRAM_BOT_TOKEN || "";

// const bot = new TelegramBot(secretTelegram, { polling: false });

export async function POST(request: NextRequest){
    const origin = request.headers.get('origin');
    const allowedOrigins = [
        "http://localhost:3000",
        "https://4life-page.vercel.app"
    ];


    if (!origin || !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 403,
        }); 
    }
    const body = await request.json()
    let sendNotification = new BrevoEmailNotificationService();
    await sendNotification.sendMessage({type:"GENERIC", message: body.message, subject: "Información de contacto"});
    // let event = {
    //     nombre: "test",
    //     telefono: "123456789",
    //     email: "test@gmail.com",
    //     ciudad: "city",
    //     direccion: "address",
    //     product_id: "prod_123",
    //     total_pagado: "100"
    // }
    // await sendNotification.sendMessage({
    //     type: "NEW_PAYMENT",
    //     message: `
    //     Se ha recibido un nuevo pago a través de MercadoPago:
    //     nombre de persona que paga: ${event.nombre},
    //     telefono: ${event.telefono},
    //     email: ${event.email},
    //     ciudad: ${event.ciudad},
    //     direccion: ${event.direccion},
    //     producto comprado (ID): ${event.product_id},
    //     total pagado: ${event.total_pagado}
    //     `, subject: "💳 Nuevo pago recibido"});
    return new NextResponse(null, {
        status: 200,
    });
}