import React from 'react';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="b-site-header">
      <span className="b-site-logo">SN</span>
      <nav className="b-site-nav">
        <Link className="b-site-nav__link" to="/">
          About
        </Link>
        <Link className="b-site-nav__link" to="/work">
          Work
        </Link>
        <Link className="b-site-nav__link" to="/projects">
          projects
        </Link>
        <button className="b-site--theme-control" id="theme-control">
          <img src={moon} className="b-icon b-icon--sun" />
          <span className="b-site--theme-text">too bright?</span>
          {/* <img src={sun} className="b-icon b-icon--sun" />
          <span className="b-site--theme-text">too dark?</span> */}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
