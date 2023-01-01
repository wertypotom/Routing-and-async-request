import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <header>
        <nav className='navbar'>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
