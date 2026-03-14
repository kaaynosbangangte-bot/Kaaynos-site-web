import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const { lang, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLangSelect = (newLang) => {
    setLanguage(newLang);
    setLangOpen(false);
  };

  const links = [
    { label: t('navbar', 'about'), href: '#about' },
    { label: t('navbar', 'services'), href: '#services' },
    { label: t('navbar', 'training'), href: '#training' },
    { label: t('navbar', 'portfolio'), href: '#portfolio' },
    { label: t('navbar', 'contact'), href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo">
          <img src="/logo.png" alt="Kaaynos Logo" />
        </a>

        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Mobile-only language switcher */}
          <li className="nav-lang-mobile">
            <button
              className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              🇬🇧 EN
            </button>
            <button
              className={`mobile-lang-btn ${lang === 'fr' ? 'active' : ''}`}
              onClick={() => setLanguage('fr')}
            >
              🇫🇷 FR
            </button>
          </li>

          <li className="nav-cta-mobile">
            <a href="#contact" className="btn-get-started" onClick={() => setMobileOpen(false)}>
              {t('navbar', 'getStarted')}
              <ArrowUpRight size={16} />
            </a>
          </li>
        </ul>

        {/* Language Dropdown (desktop) */}
        <div className="lang-dropdown" ref={langRef}>
          <button
            className="lang-dropdown-trigger"
            onClick={() => setLangOpen(!langOpen)}
            aria-label="Change language"
          >
            <Globe size={15} />
            <span className="lang-current">{lang.toUpperCase()}</span>
            <ChevronDown size={14} className={`lang-chevron ${langOpen ? 'open' : ''}`} />
          </button>
          {langOpen && (
            <div className="lang-dropdown-menu">
              <button
                className={`lang-option ${lang === 'en' ? 'active' : ''}`}
                onClick={() => handleLangSelect('en')}
              >
                <span className="lang-flag">🇬🇧</span>
                English
              </button>
              <button
                className={`lang-option ${lang === 'fr' ? 'active' : ''}`}
                onClick={() => handleLangSelect('fr')}
              >
                <span className="lang-flag">🇫🇷</span>
                Français
              </button>
            </div>
          )}
        </div>

        <a href="#contact" className="btn-get-started nav-cta-desktop">
          {t('navbar', 'getStarted')}
          <ArrowUpRight size={16} />
        </a>

        <button
          className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
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
