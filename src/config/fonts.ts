import { Inter, Montserrat_Alternates } from 'next/font/google';

export const regular = Inter({
  subsets: ['latin'],
  variable: '--font-regular',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const title = Montserrat_Alternates({
  subsets: ['latin'],
  variable: '--font-title',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
