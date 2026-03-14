import { ArrowUpRight, Code2, Globe, Smartphone, Cpu, Database, Cloud, BarChart3, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const serviceIcons = [
  <Globe size={28} />,
  <Cpu size={28} />,
  <Smartphone size={28} />,
  <Database size={28} />,
  <Cloud size={28} />,
  <BarChart3 size={28} />,
];

const serviceImages = [
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
];

const serviceTags = [
  ['React', 'Next.js', 'UI/UX'],
  ['Deep Learning', 'NLP', 'Computer Vision'],
  ['iOS', 'Android', 'React Native'],
  ['Pen Testing', 'Audit', 'SOC'],
  ['AWS', 'Azure', 'DevOps'],
  ['BI', 'Big Data', 'Dashboards'],
];

const Services = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const { t } = useLanguage();

  const serviceItems = t('services', 'items');

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal fade-up" ref={headerRef}>
          <span className="section-label">{t('services', 'label')}</span>
          <h2 className="section-title">
            {t('services', 'title1')} <span>{t('services', 'titleHighlight')}</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            {t('services', 'desc')}
          </p>
        </div>

        <div className="services-grid" ref={gridRef}>
          {Array.isArray(serviceItems) && serviceItems.map((service, index) => (
            <div
              className={`service-card reveal fade-up delay-${Math.min((index % 3 + 1) * 100, 500)}`}
              key={index}
            >
              <div className="service-image">
                <img src={serviceImages[index]} alt={service.title} loading="lazy" />
                <div className="service-image-overlay">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <div className="service-body">
                <div className="service-icon">{serviceIcons[index]}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-tags">
                  {serviceTags[index].map((tag, i) => (
                    <span key={i} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
