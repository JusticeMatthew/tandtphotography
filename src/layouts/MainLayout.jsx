import React from 'react';
import Header from '@/components/Header';
import { roboto, barlow } from '@/utils/fonts';

const MainLayout = ({ children }) => {
  return (
    <div className={`${roboto.variable} ${barlow.variable} relative`}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
