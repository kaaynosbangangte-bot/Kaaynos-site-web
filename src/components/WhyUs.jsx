import { Zap, Users, CheckCircle, Rocket, HeartHandshake, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './WhyUs.css';

const reasons = [
  {
    icon: <Zap size={26} />,
    title: 'Fast Scalable Solutions',
    desc: 'Rapid deployment of cutting-edge solutions designed to grow seamlessly with your business needs.',
    number: '01',
  },
  {
    icon: <Users size={26} />,
    title: 'Discover Ideal Experts',
    desc: 'Access a curated network of top-tier professionals with proven industry expertise and vision.',
    number: '02',
  },
  {
    icon: <CheckCircle size={26} />,
    title: 'Quality First Approach',
    desc: 'Rigorous quality assurance at every stage ensures flawless, on-time delivery every time.',
    number: '03',
  },
  {
    icon: <Rocket size={26} />,
    title: 'Innovation Driven',
    desc: 'Staying ahead of trends with innovative solutions built for the future of technology.',
    number: '04',
  },
  {
    icon: <HeartHandshake size={26} />,
    title: 'Trusted Partnerships',
    desc: 'Building lasting relationships based on trust, transparency, and mutual success.',
    number: '05',
  },
  {
    icon: <Clock size={26} />,
    title: '24/7 Dedicated Support',
    desc: 'Round-the-clock assistance ensuring your business operations never miss a beat.',
    number: '06',
  },
];

const WhyUs = () => {
  const leftRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="why-us" id="why-us">
      {/* Decorative elements */}
      <div className="why-us-orb why-us-orb-1" />
      <div className="why-us-orb why-us-orb-2" />

      <div className="container">
        <div className="why-us-layout">
          {/* Left side - header */}
          <div className="why-us-left reveal fade-right" ref={leftRef}>
            <span className="why-us-label">Nos avantages</span>
            <h2 className="why-us-title">
              Why <span>Work</span> With Us?
            </h2>
            <p className="why-us-desc">
              A dynamic, innovative IT company providing cutting-edge solutions that drive
              measurable success for our clients.
            </p>
            <div className="why-us-highlight">
              <div className="why-us-highlight-bar" />
              <p>
                We combine deep technical expertise with a relentless focus on results,
                making us your ideal technology partner for growth.
              </p>
            </div>
            <a href="#contact" className="btn-why-us">
              Start a project
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right side - cards */}
          <div className="why-us-grid" ref={gridRef}>
            {reasons.map((reason, index) => (
              <div
                className={`why-card reveal fade-up delay-${Math.min((index % 2 + 1) * 100, 500)}`}
                key={index}
              >
                <div className="why-card-number">{reason.number}</div>
                <div className="why-card-icon">{reason.icon}</div>
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
