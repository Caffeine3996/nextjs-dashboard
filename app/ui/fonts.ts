import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const bitcountPropSingle = localFont({
  src: '../../public/fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf',
  display: 'swap',
  variable: '--font-bitcount',
});