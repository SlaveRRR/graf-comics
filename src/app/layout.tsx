import ScrollToTop from '@/components/ScrollToTop';
import { RouterLoader } from '@/components/UI';
import Layout from '@/components/layout';
import AuthProvider from '@/context/authProvider';
import ContextProvider from '@/context/contextProvider';
import ReduxProvider from '@/context/reduxProvider';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Montserrat } from 'next/font/google';
import '../styles/style.scss';

const ThemeProvider = dynamic(() => import('@/context/themeProvider'), {
  loading: () => <RouterLoader />,
  ssr: false,
});

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
              <ThemeProvider>
                <ContextProvider>
                  <Layout>
                    {children}
                    <ScrollToTop />
                  </Layout>
                </ContextProvider>
              </ThemeProvider>
            </ReduxProvider>
          </AuthProvider>
        }
      </body>
    </html>
  );
};

export default RootLayout;
