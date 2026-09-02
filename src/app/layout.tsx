import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono as GeistMono } from 'next/font/google';
import Script from 'next/script';
import type { ReactElement, ReactNode } from 'react';
import { Toaster } from 'sonner';
import { Footer, Header, ServiceWorkerRegistration } from '~/components';
import { environment } from '~/environment';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: environment.APP_TITLE,
  description: environment.APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement {
  return (
    <html
      lang={environment.APP_LANGUAGE}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-500 selection:text-white">
        <Header />

        {children}

        <Footer />

        <Toaster />

        {environment.NODE_ENV === 'production' && <ServiceWorkerRegistration />}

        {environment.VERCEL_WEB_ANALYTICS_ENABLED && (
          <Analytics
            mode={environment.NODE_ENV}
            debug={environment.VERCEL_WEB_ANALYTICS_DEBUG_ENABLED}
          />
        )}

        {environment.GOOGLE_ANALITYCS_ID && (
          <GoogleAnalytics gaId={environment.GOOGLE_ANALITYCS_ID} />
        )}

        {environment.COOKIEBOT_ID && (
          <Script
            id="Cookiebot"
            type="text/javascript"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid={environment.COOKIEBOT_ID}
            {...(environment.COOKIEBOT_BLOCKING_MODE === 'auto' && {
              'data-blockingmode': 'auto',
            })}
          />
        )}
      </body>
    </html>
  );
}
