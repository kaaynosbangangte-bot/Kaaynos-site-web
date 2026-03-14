import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    image: '/site udm.png',
    url: 'https://bzssjmpz.elementor.cloud/',
    category: 'Web Design',
  },
  {
    id: 2,
    image: "/cabinet d'entaire.png",
    url: 'https://www.cabinet-dentairesmile.com/',
    category: 'Web Design',
  },
];

const Portfolio = () => {
  const { t } = useLanguage();

  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const projectItems = t('portfolio', 'items');

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header reveal fade-up" ref={headerRef}>
          <span className="portfolio-label">{t('portfolio', 'label')}</span>
          <h2 className="portfolio-title">
            {t('portfolio', 'title1')} <span>{t('portfolio', 'titleHighlight')}</span>
          </h2>
          <p className="portfolio-desc">
            {t('portfolio', 'desc')}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid reveal fade-up delay-200" ref={gridRef}>
          {Array.isArray(projectItems) && projectItems.map((item, index) => {
            const project = projects[index];
            if (!project) return null;
            return (
              <a
                className={`portfolio-card reveal fade-up delay-${(index + 1) * 100}`}
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="portfolio-img-wrapper">
                  <img src={project.image} alt={item.title} loading="lazy" />
                </div>
                <div className="portfolio-card-body">
                  <span className="project-category">{item.category}</span>
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-desc">{item.desc}</p>
                  <span className="project-link">
                    <ExternalLink size={16} />
                    {t('portfolio', 'viewSite')}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
