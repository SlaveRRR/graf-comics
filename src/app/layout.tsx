import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ContextProvider from '@/context/contextProvider';
import Layout from '@/components/layout';
import AuthProvider from '@/context/authProvider';
import ScrollToTop from '@/components/ScrollToTop';
import '../styles/style.scss';
import ReduxProvider from '@/context/reduxProvider';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Graf comics',
  description: 'Web app for reading comics`',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {
          <AuthProvider>
            <ReduxProvider>
              <ContextProvider>
                <Layout>
                  {children}
                  <ScrollToTop />
                </Layout>
              </ContextProvider>
            </ReduxProvider>
          </AuthProvider>
        }
      </body>
    </html>
  );
};

export default RootLayout;
