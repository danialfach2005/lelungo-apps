import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { getThemeScript } from '@/lib/theme';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lelungo — Discover Travel Deals',
    template: '%s | Lelungo',
  },
  description:
    'Find the best flight and hotel deals. Compare prices, discover hidden discounts, and book with confidence.',
  keywords: ['travel deals', 'cheap flights', 'hotel discounts', 'travel affiliate', 'Bali flights'],
  openGraph: {
    title: 'Lelungo — Discover Travel Deals',
    description: 'Find flights & hotels at prices you didn\'t know existed.',
    siteName: 'Lelungo',
    type: 'website',
  },
};

import { Footer } from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
      </head>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
