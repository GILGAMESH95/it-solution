import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'IT Solution | System Engineering',
    description: 'Профессиональные решения в области СКУД, видеонаблюдения, серверной инфраструктуры и сетевой инженерии',
    keywords: ['СКУД', 'видеонаблюдение', 'серверы', 'сети', 'IT инфраструктура', 'системная интеграция'],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
            <body className="antialiased">
                <div className="tech-grid"></div>
                {children}
            </body>
        </html>
    );
}
