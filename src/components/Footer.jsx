import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Facebook, Instagram, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const newsletterRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Newsletter band */}
      <div className="footer-newsletter reveal fade-up" ref={newsletterRef}>
        <div className="container footer-newsletter-inner">
          <div className="footer-newsletter-text">
            <h3>{t('footer', 'stayUpdated')}</h3>
            <p>{t('footer', 'newsletterDesc')}</p>
          </div>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={t('footer', 'emailPlaceholder')} required />
            <button type="submit">
              <Send size={16} />
              {t('footer', 'subscribe')}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid reveal fade-up delay-200" ref={gridRef}>
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logo.png" alt="Kaaynos Logo" />
              </div>
              <p>
                {t('footer', 'brandDesc')}
              </p>
              <div className="footer-socials">
                <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
                <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>{t('footer', 'company')}</h4>
              <ul>
                <li><a href="#about">{t('footer', 'aboutUs')}</a></li>
                <li><a href="#team">{t('footer', 'ourTeam')}</a></li>
                <li><a href="#services">{t('footer', 'servicesLink')}</a></li>
                <li><a href="#why-us">{t('footer', 'careers')}</a></li>
                <li><a href="#contact">{t('footer', 'contactLink')}</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t('footer', 'servicesTitle')}</h4>
              <ul>
                <li><a href="#services">{t('footer', 'webDev')}</a></li>
                <li><a href="#services">{t('footer', 'mobileApps')}</a></li>
                <li><a href="#services">{t('footer', 'aiMl')}</a></li>
                <li><a href="#services">{t('footer', 'cloudSolutions')}</a></li>
                <li><a href="#services">{t('footer', 'cybersecurity')}</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t('footer', 'getInTouch')}</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <MapPin size={14} />
                  <span>Yaoundé, Cameroun</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={14} />
                  <span>+237 678578089</span>
                </div>
                <div className="footer-contact-item">
                  <Mail size={14} />
                  <span>contact@kaaynos.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Kaaynos. {t('footer', 'copyright')}</p>
          <div className="footer-bottom-links">
            <a href="#">{t('footer', 'privacy')}</a>
            <span>·</span>
            <a href="#">{t('footer', 'terms')}</a>
          </div>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
