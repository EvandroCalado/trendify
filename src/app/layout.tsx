import { regular, title } from '@/config/fonts';
import type { Metadata } from 'next';
import '../style/globals.css';

export const metadata: Metadata = {
  title: 'Trendify Shop',
  description: 'Discover the latest trends and timeless pieces in one place. ',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${regular.variable} ${title.variable} antialiased`}>{children}</body>
    </html>
  );
}
