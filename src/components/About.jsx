import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const headerRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const row3Ref = useScrollReveal();
  const row2Ref = useScrollReveal();
  const { t } = useLanguage();

  const purposeItems = t('about', 'purposeItems');
  const valuesItems = t('about', 'valuesItems');

  return (
    <section className="about" id="about">
      {/* Decorative wave lines */}
      <div className="about-deco">
        <svg viewBox="0 0 600 200" preserveAspectRatio="none" fill="none">
          <path d="M0 100 Q150 30 300 100 T600 100" stroke="rgba(13,148,136,0.12)" strokeWidth="1.5" />
          <path d="M0 120 Q150 50 300 120 T600 120" stroke="rgba(13,148,136,0.08)" strokeWidth="1.5" />
          <path d="M0 140 Q150 70 300 140 T600 140" stroke="rgba(13,148,136,0.05)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container">
        {/* Header */}
        <div className="about-top">
          <div className="about-top-left reveal fade-up" ref={headerRef}>
            <h2 className="about-title">
              {t('about', 'title1')}{' '}
              <span className="about-title-highlight">
                {t('about', 'titleHighlight')}
              </span>{' '}
              {t('about', 'title2')}
            </h2>
            <p className="about-subtitle">
              {t('about', 'subtitle')}
            </p>
          </div>
          <div className="about-top-right reveal fade-left delay-200" ref={ctaRef}>
            <a href="#services" className="btn-learn-more">
              {t('about', 'learnMore')}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Cards Row 1: 3 equal cards */}
        <div className="about-cards-row-3" ref={row3Ref}>
          <div className="about-card reveal fade-up delay-100">
            <h3 className="about-card-title">{t('about', 'whoWeAre')}</h3>
            <p className="about-card-text">
              {t('about', 'whoWeAreText')}
            </p>
          </div>

          <div className="about-card reveal fade-up delay-200">
            <h3 className="about-card-title">{t('about', 'ourMission')}</h3>
            <p className="about-card-text">
              {t('about', 'ourMissionText')}
            </p>
          </div>

          <div className="about-card reveal fade-up delay-300">
            <h3 className="about-card-title">{t('about', 'ourVision')}</h3>
            <p className="about-card-text">
              {t('about', 'ourVisionText')}
            </p>
          </div>
        </div>

        {/* Cards Row 2: 2 equal cards */}
        <div className="about-cards-row-2" ref={row2Ref}>
          <div className="about-card reveal fade-up delay-100">
            <h3 className="about-card-title">{t('about', 'ourPurpose')}</h3>
            <ul className="about-card-list">
              {Array.isArray(purposeItems) && purposeItems.map((item, i) => (
                <li key={i}>
                  <strong>{item.strong}</strong> – {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-card reveal fade-up delay-200">
            <h3 className="about-card-title">{t('about', 'coreValues')}</h3>
            <ul className="about-card-list">
              {Array.isArray(valuesItems) && valuesItems.map((item, i) => (
                <li key={i}>
                  <strong>{item.strong}</strong> – {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
