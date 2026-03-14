import { Zap, Users, CheckCircle, Rocket, HeartHandshake, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './WhyUs.css';

const reasonIcons = [
  <Zap size={26} />,
  <Users size={26} />,
  <CheckCircle size={26} />,
  <Rocket size={26} />,
  <HeartHandshake size={26} />,
  <Clock size={26} />,
];

const WhyUs = () => {
  const leftRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const { t } = useLanguage();

  const reasonItems = t('whyUs', 'items');

  return (
    <section className="why-us" id="why-us">
      {/* Decorative elements */}
      <div className="why-us-orb why-us-orb-1" />
      <div className="why-us-orb why-us-orb-2" />

      <div className="container">
        <div className="why-us-layout">
          {/* Left side - header */}
          <div className="why-us-left reveal fade-right" ref={leftRef}>
            <span className="why-us-label">{t('whyUs', 'label')}</span>
            <h2 className="why-us-title">
              {t('whyUs', 'title1')} <span>{t('whyUs', 'titleHighlight')}</span> {t('whyUs', 'title2')}
            </h2>
            <p className="why-us-desc">
              {t('whyUs', 'desc')}
            </p>
            <div className="why-us-highlight">
              <div className="why-us-highlight-bar" />
              <p>
                {t('whyUs', 'highlight')}
              </p>
            </div>
            <a href="#contact" className="btn-why-us">
              {t('whyUs', 'cta')}
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right side - cards */}
          <div className="why-us-grid" ref={gridRef}>
            {Array.isArray(reasonItems) && reasonItems.map((reason, index) => (
              <div
                className={`why-card reveal fade-up delay-${Math.min((index % 2 + 1) * 100, 500)}`}
                key={index}
              >
                <div className="why-card-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="why-card-icon">{reasonIcons[index]}</div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
