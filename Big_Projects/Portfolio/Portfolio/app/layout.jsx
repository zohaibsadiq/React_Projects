import Header from '@/components/Header';
import './globals.css';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body className='font-primary'>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}