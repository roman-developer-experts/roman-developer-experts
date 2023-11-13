import { IProps } from '@lib/type';
import { Fragment } from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }: IProps) => {
  return (
    <Fragment>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-[1440px] px-6 pb-20 pt-44 tablet:px-20 laptop:px-6 laptop-md:px-20">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
