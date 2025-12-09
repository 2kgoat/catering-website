import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Q's Catering - Exquisite Flavors for Unforgettable Events",
  description: 'Award-winning catering services for weddings, corporate events, and special occasions. Elevate your celebration with our artisanal menus and exceptional service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
