import '../styles/global.css';
import { IBM_Plex_Mono } from '@next/font/google';
import { Metadata } from 'next';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bryanwongyk.com'),
  title: {
    default: 'Bryan Wong',
    template: '%s | Bryan Wong',
  },
  description: 'Software engineer & creator.',
  openGraph: {
    title: 'Bryan Wong',
    description: 'Software engineer & creator.',
    url: 'https://bryanwongyk.com',
    siteName: 'Bryan Wong',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Bryan Wong',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`h-full font-sans ${ibmPlexMono.variable}`}>
      <body> {children}</body>
    </html>
  );
}
