import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">WikiCountries</Link>
    </nav>
  );
};

export default Navbar;
