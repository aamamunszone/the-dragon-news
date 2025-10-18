import React from 'react';
import HeaderTop from '../../components/Header/HeaderTop';
import LatestNews from '../../components/Header/LatestNews';
import NavbarAndCTA from '../../components/Header/NavbarAndCTA';

const NewsLayout = () => {
  return (
    //   Header Section
    <header className="pt-10 pb-5 flex flex-col justify-between gap-10">
      {/* Header Top section */}
      <HeaderTop />
      {/* Latest News */}
      <LatestNews />
      {/* Navbar And CTA Button */}
      <NavbarAndCTA />
    </header>
  );
};

export default NewsLayout;
