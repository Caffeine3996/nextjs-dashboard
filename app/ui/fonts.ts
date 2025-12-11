import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });


export const lusitana = localFont({
  src: '../../public/fonts/lusitana.woff2',
  display: 'swap',
  variable: '--font-bitcount',
});
export const bitcountPropSingle = localFont({
  src: '../../public/fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf',
  display: 'swap',
  variable: '--font-bitcount',
});