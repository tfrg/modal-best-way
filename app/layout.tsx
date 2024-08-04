import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CurrentPage from '@/components/ui/current-page';
import Modal from '@/components/ui/single-modal/single-modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Perfect Modal',
  description:
    'Learn to implement the perfect modal in react.js @pixel.developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          {children}
        </main>
        <CurrentPage />
        <Modal />
      </body>
    </html>
  );
}
