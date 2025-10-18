import React from 'react';
import HeaderTop from '../../components/Header/HeaderTop';
import LatestNews from '../../components/Header/LatestNews';
import NavbarAndCTA from '../../components/Header/NavbarAndCTA';
import Container from '../../components/Container/Container';
import LeftAside from '../../components/NewsLayout/LeftAside/LeftAside';
import RightAside from '../../components/NewsLayout/RightAside/RightAside';
import { Outlet } from 'react-router';

const NewsLayout = () => {
  return (
    <>
      {/* Header Section */}
      <header className="pt-10 pb-14 flex flex-col justify-between gap-10">
        {/* Header Top section */}
        <HeaderTop />
        {/* Latest News */}
        <LatestNews />
        {/* Navbar And CTA Button */}
        <NavbarAndCTA />
      </header>

      {/* Main Section */}
      <main>
        <Container className="grid grid-cols-12 gap-10">
          {/* All Category Section (Left Aside) */}
          <aside className="col-span-3">
            <LeftAside />
          </aside>
          {/* Home Section */}
          <section className="col-span-6">
            <Outlet />
          </section>
          {/* Account, Socials & Advertisement Section (Right Aside) */}
          <aside className="col-span-3">
            <RightAside />
          </aside>
        </Container>
      </main>
    </>
  );
};

export default NewsLayout;
