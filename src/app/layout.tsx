import Header from '@senoe/components/header';
import { cn } from '@senoe/lib/utils';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

export const metadata = {
  title: 'senoe.dev',
  description: "Hey, I'm senoe. This is my personal site."
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          sizes="180x180"
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          sizes="16x16"
          type="image/png"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ea5e9" />
        <meta name="apple-mobile-web-app-title" content="senoe.dev" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="application-name" content="senoe.dev" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={cn(inter.className, 'container')}>
        <main className="min-h-screen p-5">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
