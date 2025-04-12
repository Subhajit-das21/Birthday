// src/app/layout.js

import './globals.css';
import { Inter } from 'next/font/google';
import ClientOnly from '@/components/ClientOnly';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tuaaa\'s Birthday Site',
  description: 'Made with 💙 by Subhajit for Tuaaa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
