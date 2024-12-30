import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const DefaultLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
