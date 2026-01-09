import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_INSTRUCTION = `
Вы — ведущий инженер компании IT Solution, эксперт в области СКУД (системы контроля и управления доступом), систем видеонаблюдения, серверной инфраструктуры и сетевой инженерии.
Ваша задача — консультировать клиентов по техническим решениям.
Отвечайте профессионально, лаконично и технически грамотно на русском языке.
Если клиент спрашивает о стоимости, объясните, что для точного расчета нужен выезд инженера, но вы можете составить предварительный список необходимого оборудования.
Специализации:
1. СКУД: биометрия, турникеты, учет рабочего времени.
2. Видеонаблюдение: IP-камеры, видеоаналитика, хранение данных.
3. Серверы: сборка, настройка, виртуализация, миграция в облако.
4. Сети: монтаж СКС, Wi-Fi для офисов, настройка маршрутизации и безопасности (Firewalls).
`;

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            console.error('API_KEY not found in environment variables');
            return NextResponse.json(
                { error: 'API configuration error' },
                { status: 500 }
            );
        }

        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: message,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
            },
        });

        const text = response.text || 'Извините, произошла ошибка при обработке вашего запроса.';

        return NextResponse.json({ response: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        return NextResponse.json(
            { error: 'Произошла техническая ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.' },
            { status: 500 }
        );
    }
}
