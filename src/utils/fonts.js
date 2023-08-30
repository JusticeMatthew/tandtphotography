import { Roboto_Flex, Barlow_Condensed } from 'next/font/google';

export const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
});
export const barlow = Barlow_Condensed({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-barlow',
});
