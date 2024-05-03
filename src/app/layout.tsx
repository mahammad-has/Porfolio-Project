import type { Metadata } from 'next';
import { Lilita_One as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
import MainLayout from '@/components/layouts/main-layout';
import { aboutPageContent } from '@/content/content';

const fontSans = FontSans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: `Personal Portfolio - ${aboutPageContent.name}`,
  description: aboutPageContent.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background-custom font-sans antialiased text-foreground-custom',
          fontSans.variable
        )}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
