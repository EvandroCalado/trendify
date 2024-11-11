import { regular, title } from '@/configs/fonts';
import type { Metadata } from 'next';
import logoLight from '../../public/Logo-white.svg';
import logoDark from '../../public/Logo.svg';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Trendify | Shop',
    template: '%s - Trendify | Shop',
  },
  description: 'Discover the latest trends and timeless pieces in one place.',
  icons: {
    icon: [
      {
        rel: 'icon',
        media: '(prefers-color-scheme: dark)',
        url: logoLight.src,
        type: 'image/svg+xml',
      },
      {
        rel: 'icon',
        media: '(prefers-color-scheme: light)',
        url: logoDark.src,
        type: 'image/svg+xml',
      },
    ],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR">
      <body className={`${regular.variable} ${title.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
