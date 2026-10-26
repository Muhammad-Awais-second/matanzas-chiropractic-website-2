import type { Metadata } from 'next';
import { Cormorant_Garamond, Public_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-public-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Matanzas Chiropractic and Spine Injury Center',
  description:
    'St. Augustine chiropractic care for back pain, auto injuries, and persistent tendon pain. Trauma-trained care, Shockwave Therapy (ESWT), cold laser therapy, massage, and VA Community Care support.',
  openGraph: {
    title: 'Matanzas Chiropractic and Spine Injury Center',
    description:
      'St. Augustine chiropractic care for back pain, auto injuries, and persistent tendon pain. Trauma-trained care, Shockwave Therapy (ESWT), cold laser therapy, massage, and VA Community Care support.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matanzas Chiropractic and Spine Injury Center',
    description:
      'St. Augustine chiropractic care for back pain, auto injuries, and persistent tendon pain. Trauma-trained care, Shockwave Therapy (ESWT), cold laser therapy, massage, and VA Community Care support.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${publicSans.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#FFFFFF] text-[#101828] antialiased selection:bg-[#1B3A8A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
