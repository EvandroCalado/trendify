import { regular, title } from '@/configs/fonts';
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Trendify Shop',
  description: 'Discover the latest trends and timeless pieces in one place. ',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${regular.variable} ${title.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
