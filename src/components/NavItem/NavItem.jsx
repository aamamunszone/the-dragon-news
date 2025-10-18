import React from 'react';
import { NavLink } from 'react-router';

const NavItem = ({ to, children, className = '' }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-1 rounded-md leading-relaxed font-medium ${
          isActive
            ? 'underline underline-offset-4 text-base-content'
            : 'text-accent-content'
        } ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
