import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/nornecraft logo.webp';
import { useBasePath, withBase } from '../config/site';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = useBasePath();
  const home = withBase(basePath, '/');

  return (
    <header className="header">
      <div className="header-inner container">
        <Link
          to={home}
          className="logo"
          aria-label="Norne Craft — home"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Norne Craft logo" width="160" height="40" />
        </Link>

        <nav
          className={`nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          <NavLink to={home} end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to={withBase(basePath, '/shop')} onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to={withBase(basePath, '/about')} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to={withBase(basePath, '/blog')} onClick={() => setMenuOpen(false)}>Blog</NavLink>
          <NavLink to={withBase(basePath, '/contact')} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to={withBase(basePath, '/faq')} onClick={() => setMenuOpen(false)}>FAQ</NavLink>
        </nav>

        <div className="header-actions">
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
