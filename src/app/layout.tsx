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

export const revalidate = 3600; // ISR caching

export const metadata: Metadata = {
  title: 'Lelungo — Discover Hidden Travel Deals',
  description: 'Find cheap flights, hotels, and hidden travel deals powered by AI.',
  keywords: ['travel deals', 'cheap flights', 'hotel discounts', 'travel affiliate', 'AI travel'],
  openGraph: {
    title: 'Lelungo — Discover Hidden Travel Deals',
    description: 'Find cheap flights, hotels, and hidden travel deals powered by AI.',
    siteName: 'Lelungo',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lelungo Preview',
      },
    ],
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
