import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  const headerRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const row3Ref = useScrollReveal();
  const row2Ref = useScrollReveal();

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
              Discover Kaaynos:{' '}
              <span className="about-title-highlight">
                Cutting-Edge Digital Solutions
              </span>{' '}
              Engineered for Your Success
            </h2>
            <p className="about-subtitle">
              We offer web development, AI, cybersecurity, cloud, and network solutions to help your
              business thrive with simple and effective technology.
            </p>
          </div>
          <div className="about-top-right reveal fade-left delay-200" ref={ctaRef}>
            <a href="#services" className="btn-learn-more">
              Learn More
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Cards Row 1: 3 equal cards */}
        <div className="about-cards-row-3" ref={row3Ref}>
          <div className="about-card reveal fade-up delay-100">
            <h3 className="about-card-title">Who We Are</h3>
            <p className="about-card-text">
              Kaaynos is a technology powerhouse challenging the status quo by harnessing Africa's
              talent to deliver world-class solutions. Through cost efficiency, time zone synergy,
              and relentless innovation, we empower businesses while driving sustainability, social
              impact, and a future shaped by bold, transformative technology.
            </p>
          </div>

          <div className="about-card reveal fade-up delay-200">
            <h3 className="about-card-title">Our Mission</h3>
            <p className="about-card-text">
              We unleash Africa's Brightest Minds to Transform the Future. We empower top talent to
              create scalable technology solutions that drive business growth, spark innovation, and
              advance a sustainable, impactful future.
            </p>
          </div>

          <div className="about-card reveal fade-up delay-300">
            <h3 className="about-card-title">Our Vision</h3>
            <p className="about-card-text">
              To be Africa's foremost technology powerhouse, pioneering innovation, redefining
              excellence, and creating a sustainable impact on a global scale.
            </p>
          </div>
        </div>

        {/* Cards Row 2: 2 equal cards */}
        <div className="about-cards-row-2" ref={row2Ref}>
          <div className="about-card reveal fade-up delay-100">
            <h3 className="about-card-title">Our Purpose</h3>
            <ul className="about-card-list">
              <li>
                <strong>Unlock Potential</strong> – Cultivating Africa's brightest minds, equipping
                them to lead in the global tech arena.
              </li>
              <li>
                <strong>Drive Sustainability</strong> – Pioneering ESG initiatives that create
                lasting social and environmental impact.
              </li>
              <li>
                <strong>Accelerate Innovation</strong> – Delivering groundbreaking, cost-effective
                technology solutions that fuel growth and redefine possibilities.
              </li>
            </ul>
          </div>

          <div className="about-card reveal fade-up delay-200">
            <h3 className="about-card-title">Core Values</h3>
            <ul className="about-card-list">
              <li>
                <strong>Excellence</strong> – Striving for top-quality results.
              </li>
              <li>
                <strong>Innovation</strong> – Creating forward-thinking solutions.
              </li>
              <li>
                <strong>Sustainability</strong> – Committing to responsible practices.
              </li>
              <li>
                <strong>Empowerment</strong> – Investing in talent and leadership.
              </li>
              <li>
                <strong>Collaboration</strong> – Building strong partnerships.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
