import React, { FC } from 'react';
import UIContainer from '../UIContainer';
import Footer from './footer';
import Header from './header';
import Main from './main';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children}
        <UIContainer />
      </Main>

      <Footer />
    </>
  );
};

export default Layout;
