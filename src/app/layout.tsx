import Header from '@senoe/components/header';
import { cn } from '@senoe/lib/utils';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

export const metadata = {
  title: 'senoe.dev',
  description: "hey! i'm senoe. this is my personal site."
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={cn(inter.className, 'container')}>
        <main className="min-h-screen p-5">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
