import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/nornecraft logo.webp';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      

      <header className="header">
        <div className="header-inner container">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Norne Craft" />
          </Link>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
            <NavLink to="/add-product" onClick={() => setMenuOpen(false)}>Add Product</NavLink>
          </nav>

          <div className="header-actions">
            <button
              className={`menu-toggle ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
