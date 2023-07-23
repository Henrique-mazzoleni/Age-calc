import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Poppins-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--poppins',
});

export const metadata: Metadata = {
  title: 'Age Calculator',
  description: 'Calculate your age!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
