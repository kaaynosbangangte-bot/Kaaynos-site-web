import { Monitor, Code2, Palette, TerminalSquare, GraduationCap, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './Training.css';

const trainingIcons = [
  <Monitor size={28} />,
  <Code2 size={28} />,
  <Palette size={28} />,
  <TerminalSquare size={28} />,
];

const Training = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const { t } = useLanguage();

  const trainingItems = t('training', 'items');

  return (
    <section className="training" id="training">
      <div className="training-bg">
        <div className="training-bg-circle training-bg-circle-1" />
        <div className="training-bg-circle training-bg-circle-2" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="training-header reveal fade-up" ref={headerRef}>
          <span className="training-label">
            <GraduationCap size={16} />
            {t('training', 'label')}
          </span>
          <h2 className="training-title">
            {t('training', 'title1')} <span>{t('training', 'titleHighlight')}</span>
          </h2>
          <p className="training-desc">
            {t('training', 'desc')}
          </p>
        </div>

        {/* Training Cards */}
        <div className="training-grid" ref={gridRef}>
          {Array.isArray(trainingItems) && trainingItems.map((item, index) => (
            <div
              className={`training-card reveal fade-up delay-${(index + 1) * 100}`}
              key={index}
            >
              <div className="training-card-icon">
                {trainingIcons[index]}
              </div>
              <div className="training-card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul className="training-card-topics">
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="training-card-footer">
                <span className="training-duration">{item.duration}</span>
                <a href="#contact" className="training-card-link">
                  {t('training', 'cta')}
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="training-cta reveal fade-up delay-300" ref={ctaRef}>
          <p>{t('training', 'ctaDesc')}</p>
          <a href="#contact" className="btn-training-cta">
            {t('training', 'ctaBtn')}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Training;
