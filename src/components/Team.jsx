import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Team.css';

const members = [
  {
    name: 'Alex N\'Dri',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    bio: 'Visionary leader with 15+ years in tech innovation across Africa.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Camille Zohoré',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=face',
    bio: 'Engineering expert driving cloud architecture and AI strategy.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Ibrahim Konaté',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face',
    bio: 'Full-stack craftsman building scalable enterprise solutions.',
    linkedin: '#',
    twitter: '#',
  },
];

const Team = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-top reveal fade-up" ref={headerRef}>
          <div className="team-top-left">
            <span className="team-label">Notre équipe</span>
            <h2 className="team-title">
              Meet Our <span>Leaders</span>
            </h2>
          </div>
          <p className="team-desc">
            Our experienced leadership team brings together decades of expertise
            in technology, business strategy, and innovation to drive your success.
          </p>
        </div>

        <div className="team-grid" ref={gridRef}>
          {members.map((member, index) => (
            <div
              className={`team-card reveal fade-up delay-${(index + 1) * 100}`}
              key={index}
            >
              <div className="team-card-image">
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-card-overlay">
                  <div className="team-card-socials">
                    <a href={member.linkedin} aria-label="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                    <a href={member.twitter} aria-label="Twitter">
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
                <div className="team-card-badge">{member.role}</div>
              </div>
              <div className="team-card-body">
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
                <a href={member.linkedin} className="team-card-link">
                  View Profile <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
