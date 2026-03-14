import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import './Team.css';

const memberNames = ["Arlette Nya Nzueke Epse Djoukwe", "Théodore Nzueke", "Yaweni Tangyie Shulem"];
const memberImages = [
  '/Arlette nya nzueke epse djoukwe.jpg',
  '/théodore nzueke.png',
  '/YAWENI TANGYIE SHULEM.jpg',
];

const Team = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const { t } = useLanguage();

  const memberTranslations = t('team', 'members');

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-top reveal fade-up" ref={headerRef}>
          <div className="team-top-left">
            <span className="team-label">{t('team', 'label')}</span>
            <h2 className="team-title">
              {t('team', 'title1')} <span>{t('team', 'titleHighlight')}</span>
            </h2>
          </div>
          <p className="team-desc">
            {t('team', 'desc')}
          </p>
        </div>

        <div className="team-grid" ref={gridRef}>
          {Array.isArray(memberTranslations) && memberTranslations.map((member, index) => (
            <div
              className={`team-card reveal fade-up delay-${(index + 1) * 100}`}
              key={index}
            >
              <div className="team-card-image">
                <img src={memberImages[index]} alt={memberNames[index]} loading="lazy" />
                <div className="team-card-overlay">
                  <div className="team-card-socials">
                    <a href="#" aria-label="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
                <div className="team-card-badge">{member.role}</div>
              </div>
              <div className="team-card-body">
                <h3>{memberNames[index]}</h3>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
