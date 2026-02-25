import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#why-us' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo">
          <div className="logo-icon">K</div>
          <span>Kaaynos</span>
        </a>

        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="#contact" className="btn-get-started" onClick={() => setMobileOpen(false)}>
              Get Started
              <ArrowUpRight size={16} />
            </a>
          </li>
        </ul>

        <a href="#contact" className="btn-get-started nav-cta-desktop">
          Get Started
          <ArrowUpRight size={16} />
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
