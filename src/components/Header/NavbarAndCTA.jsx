import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router';
import UserLogo from '../../assets/images/logos/user.png';
import NavItem from '../NavItem/NavItem';

const NavbarAndCTA = () => {
  const navLinks = (
    <>
      <li>
        <NavItem to="/home">Home</NavItem>
      </li>
      <li>
        <NavItem to="/about">About</NavItem>
      </li>
      <li>
        <NavItem to="career">Career</NavItem>
      </li>
    </>
  );

  return (
    <section>
      <Container className="flex justify-between items-center">
        <div className="flex-1"></div>
        <nav className="flex-1">
          <ul className="flex justify-center items-center gap-2.5">
            {navLinks}
          </ul>
        </nav>
        <div className="flex-1 flex justify-end items-center gap-2.5">
          <img src={UserLogo} alt="User Logo" />
          <Link className="bg-neutral text-neutral-content px-8 py-1 text-lg font-medium">
            Login
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NavbarAndCTA;
